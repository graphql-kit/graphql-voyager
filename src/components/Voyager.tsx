import './Voyager.css';
import './viewport.css';

import { ThemeProvider } from '@mui/material/styles';
import {
  Children,
  type ReactElement,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { getTypeGraph, SVGRender } from '../graph/';
import { extractTypeId, getSchema } from '../introspection';
import { voyagerIntrospectionQuery } from '../utils/introspection-query';
import DocExplorer from './doc-explorer/DocExplorer';
import GraphViewport from './GraphViewport';
import { theme } from './MUITheme';
import Settings from './settings/Settings';
import PoweredBy from './utils/PoweredBy';
import { VoyagerLogo } from './utils/VoyagerLogo';

type IntrospectionProvider = (query: string) => Promise<any>;

export interface VoyagerDisplayOptions {
  rootType?: string;
  skipRelay?: boolean;
  skipDeprecated?: boolean;
  showLeafFields?: boolean;
  sortByAlphabet?: boolean;
  hideRoot?: boolean;
}

const defaultDisplayOptions = {
  rootType: undefined,
  skipRelay: true,
  skipDeprecated: true,
  sortByAlphabet: false,
  showLeafFields: true,
  hideRoot: false,
};

export interface VoyagerProps {
  introspection: IntrospectionProvider | unknown;
  displayOptions?: VoyagerDisplayOptions;
  hideDocs?: boolean;
  hideSettings?: boolean;
  hideVoyagerLogo?: boolean;

  children?: ReactNode;
}

export default function Voyager(props: VoyagerProps) {
  const [introspectionData, setIntrospectionData] = useState(null);
  const [displayOptions, setDisplayOptions] = useState({
    ...defaultDisplayOptions,
    ...props.displayOptions,
  });

  useEffect(() => {
    let introspection = props.introspection;
    if (typeof introspection === 'function') {
      console.warn(
        'GraphQLVoyager: Passing function as "introspection" is deprecated.' +
          'To access introspection query, please use "voyagerIntrospectionQuery".',
      );

      introspection = introspection(voyagerIntrospectionQuery);
    }

    // FIXME: handle rejection and also handle errors inside introspection
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.resolve(introspection).then(({ data }) => {
      setIntrospectionData(data);
      setSelected({ typeID: null, edgeID: null });
    });
  }, [props.introspection]);

  const schema = useMemo(
    () =>
      getSchema(
        introspectionData,
        displayOptions.sortByAlphabet,
        displayOptions.skipRelay,
        displayOptions.skipDeprecated,
      ),
    [
      introspectionData,
      displayOptions.sortByAlphabet,
      displayOptions.skipRelay,
      displayOptions.skipDeprecated,
    ],
  );

  const typeGraph = useMemo(
    () =>
      getTypeGraph(schema, displayOptions.rootType, displayOptions.hideRoot),
    [schema, displayOptions.rootType, displayOptions.hideRoot],
  );

  const [selected, setSelected] = useState({ typeID: null, edgeID: null });

  const {
    hideDocs = false,
    hideSettings = false,
    // TODO: switch to false in the next major version
    hideVoyagerLogo = true,
  } = props;

  const viewportRef = useRef(null);
  useEffect(() => viewportRef.current?.resize(), [hideDocs]);

  // TODO: move into GraphViewport
  const svgRenderer = useMemo(() => new SVGRender(), []);

  return (
    <ThemeProvider theme={theme}>
      <div className="graphql-voyager">
        {!hideDocs && renderPanel()}
        {!hideSettings && renderSettings()}
        {renderGraphViewport()}
      </div>
    </ThemeProvider>
  );

  function renderPanel() {
    const children = Children.toArray(props.children);
    const panelHeader = children.find(
      (child: ReactElement) => child.type === Voyager.PanelHeader,
    );

    return (
      <div className="doc-panel">
        <div className="contents">
          {!hideVoyagerLogo && <VoyagerLogo />}
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

  function renderSettings() {
    if (schema == null) return null;

    return (
      <Settings
        schema={schema}
        options={displayOptions}
        onChange={(options) =>
          setDisplayOptions((oldOptions) => ({ ...oldOptions, ...options }))
        }
      />
    );
  }

  function renderGraphViewport() {
    return (
      <GraphViewport
        svgRenderer={svgRenderer}
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
        return { typeID: extractTypeId(edgeID), edgeID };
      }
    });
  }
}

function PanelHeader(props: { children: ReactNode }) {
  return <>{props.children}</>;
}
Voyager.PanelHeader = PanelHeader;
