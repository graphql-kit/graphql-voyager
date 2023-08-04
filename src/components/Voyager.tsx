import './Voyager.css';
import './viewport.css';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import { ExecutionResult } from 'graphql/execution';
import { GraphQLSchema } from 'graphql/type';
import { buildClientSchema, IntrospectionQuery } from 'graphql/utilities';
import {
  Children,
  type ReactElement,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { getTypeGraph } from '../graph/';
import { extractTypeName, getSchema, typeNameToId } from '../introspection';
import { MaybePromise, usePromise } from '../utils/usePromise';
import DocExplorer from './doc-explorer/DocExplorer';
import GraphViewport from './GraphViewport';
import { IntrospectionModal } from './IntrospectionModal';
import { theme } from './MUITheme';
import Settings from './settings/Settings';
import PoweredBy from './utils/PoweredBy';
import { VoyagerLogo } from './utils/VoyagerLogo';

export interface VoyagerDisplayOptions {
  rootType?: string;
  skipRelay?: boolean;
  skipDeprecated?: boolean;
  showLeafFields?: boolean;
  sortByAlphabet?: boolean;
  hideRoot?: boolean;
}

export interface VoyagerProps {
  introspection?: MaybePromise<
    ExecutionResult<IntrospectionQuery> | GraphQLSchema
  >;
  displayOptions?: VoyagerDisplayOptions;
  introspectionPresets?: { [name: string]: any };
  allowToChangeSchema?: boolean;
  hideDocs?: boolean;
  hideSettings?: boolean;
  hideVoyagerLogo?: boolean;

  children?: ReactNode;
}

export default function Voyager(props: VoyagerProps) {
  const initialDisplayOptions: VoyagerDisplayOptions = useMemo(
    () => ({
      rootType: undefined,
      skipRelay: true,
      skipDeprecated: true,
      sortByAlphabet: false,
      showLeafFields: true,
      hideRoot: false,
      ...props.displayOptions,
    }),
    [props.displayOptions],
  );

  const [introspectionModalOpen, setIntrospectionModalOpen] = useState(
    props.introspection == null,
  );
  const [introspectionResult, resolveIntrospectionResult] = usePromise(
    props.introspection,
  );
  const [displayOptions, setDisplayOptions] = useState(initialDisplayOptions);

  useEffect(() => {
    setDisplayOptions(initialDisplayOptions);
  }, [introspectionResult, initialDisplayOptions]);

  const typeGraph = useMemo(() => {
    if (introspectionResult.loading || introspectionResult.value == null) {
      // FIXME: display introspectionResult.error
      return null;
    }

    const introspectionSchema =
      introspectionResult.value instanceof GraphQLSchema
        ? introspectionResult.value
        : buildClientSchema(introspectionResult.value.data);

    const schema = getSchema(
      introspectionSchema,
      displayOptions.sortByAlphabet,
      displayOptions.skipRelay,
      displayOptions.skipDeprecated,
    );
    return getTypeGraph(
      schema,
      displayOptions.rootType,
      displayOptions.hideRoot,
    );
  }, [introspectionResult, displayOptions]);

  useEffect(() => {
    setSelected({ typeID: null, edgeID: null });
  }, [typeGraph]);

  const [selected, setSelected] = useState({ typeID: null, edgeID: null });

  const {
    allowToChangeSchema = false,
    hideDocs = false,
    hideSettings = false,
    // TODO: switch to false in the next major version
    hideVoyagerLogo = true,
  } = props;

  const viewportRef = useRef(null);
  useEffect(() => viewportRef.current?.resize(), [hideDocs]);

  return (
    <ThemeProvider theme={theme}>
      <div className="graphql-voyager">
        {!hideDocs && renderPanel()}
        {!hideSettings && renderSettings()}
        {renderGraphViewport()}
        {allowToChangeSchema && renderIntrospectionModal()}
      </div>
    </ThemeProvider>
  );

  function renderIntrospectionModal() {
    return (
      <IntrospectionModal
        open={introspectionModalOpen}
        presets={props.introspectionPresets}
        onClose={() => setIntrospectionModalOpen(false)}
        onChange={resolveIntrospectionResult}
      />
    );
  }

  function renderPanel() {
    const children = Children.toArray(props.children);
    const panelHeader = children.find(
      (child: ReactElement) => child.type === Voyager.PanelHeader,
    );

    return (
      <div className="doc-panel">
        <div className="contents">
          {!hideVoyagerLogo && <VoyagerLogo />}
          {allowToChangeSchema && renderChangeSchemaButton()}
          {panelHeader}
          <DocExplorer
            typeGraph={typeGraph}
            selectedTypeID={selected.typeID}
            selectedEdgeID={selected.edgeID}
            onFocusNode={(id) => viewportRef.current.focusNode(id)}
            onSelectNode={handleSelectNode}
            onSelectEdge={handleSelectEdge}
          />
          <PoweredBy />
        </div>
      </div>
    );
  }

  function renderChangeSchemaButton() {
    // TODO: generalize padding by applying it to the whole panel
    return (
      <Stack padding={({ panelSpacing }) => `0 ${panelSpacing}`}>
        <Button
          color="primary"
          style={{ color: 'white' }}
          variant="contained"
          onClick={() => setIntrospectionModalOpen(true)}
        >
          Change Schema
        </Button>
      </Stack>
    );
  }

  function renderSettings() {
    if (typeGraph == null) return null;

    return (
      <Settings
        options={displayOptions}
        typeGraph={typeGraph}
        onChange={(options) =>
          setDisplayOptions((oldOptions) => ({ ...oldOptions, ...options }))
        }
      />
    );
  }

  function renderGraphViewport() {
    return (
      <GraphViewport
        typeGraph={typeGraph}
        displayOptions={displayOptions}
        selectedTypeID={selected.typeID}
        selectedEdgeID={selected.edgeID}
        onSelectNode={handleSelectNode}
        onSelectEdge={handleSelectEdge}
        ref={viewportRef}
      />
    );
  }

  function handleSelectNode(typeID: string) {
    setSelected((oldSelected) => {
      if (typeID === oldSelected.typeID) {
        return oldSelected;
      }
      return { typeID, edgeID: null };
    });
  }

  function handleSelectEdge(edgeID: string) {
    setSelected((oldSelected) => {
      if (edgeID === oldSelected.edgeID) {
        // deselect if click again
        return { ...oldSelected, edgeID: null };
      } else {
        return { typeID: typeNameToId(extractTypeName(edgeID)), edgeID };
      }
    });
  }
}

function PanelHeader(props: { children: ReactNode }) {
  return <>{props.children}</>;
}
Voyager.PanelHeader = PanelHeader;
