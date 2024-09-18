import Box from '@mui/material/Box';
import { IntrospectionObjectType, IntrospectionSchema } from 'graphql/utilities/getIntrospectionQuery';
import { Component, createRef } from 'react';

import { renderSvg } from '../graph/svg-renderer';
import { TypeGraph } from '../graph/type-graph';
import { Viewport } from '../graph/viewport';
import LoadingAnimation from './utils/LoadingAnimation';

interface GraphViewportProps {
  typeGraph: TypeGraph | null;
  highlightSchema: IntrospectionSchema | null;

  selectedTypeID: string | null;
  selectedEdgeID: string | null;

  onSelectNode: (id: string | null) => void;
  onSelectEdge: (id: string) => void;
}

interface GraphViewportState {
  typeGraph: TypeGraph | null;
  svgViewport: Viewport | null;
}

export default class GraphViewport extends Component<
  GraphViewportProps,
  GraphViewportState
> {
  state: GraphViewportState = { typeGraph: null, svgViewport: null };

  _containerRef = createRef<HTMLDivElement>();
  // Handle async graph rendering based on this example
  // https://gist.github.com/bvaughn/982ab689a41097237f6e9860db7ca8d6
  _currentTypeGraph: TypeGraph | null = null;

  static getDerivedStateFromProps(
    props: GraphViewportProps,
    state: GraphViewportState,
  ): GraphViewportState | null {
    const { typeGraph } = props;

    if (typeGraph !== state.typeGraph) {
      return { typeGraph, svgViewport: null };
    }

    return null;
  }

  componentDidMount() {
    this._renderSvgAsync(this.props.typeGraph);
  }

  componentDidUpdate(
    prevProps: GraphViewportProps,
    prevState: GraphViewportState,
  ) {
    const { svgViewport } = this.state;

    if (svgViewport == null) {
      this._renderSvgAsync(this.props.typeGraph);
      return;
    }

    const isJustRendered = prevState.svgViewport == null;
    const { selectedTypeID, selectedEdgeID, highlightSchema } = this.props;

    if (prevProps.selectedTypeID !== selectedTypeID || isJustRendered) {
      svgViewport.selectNodeById(selectedTypeID);
    }

    if (prevProps.selectedEdgeID !== selectedEdgeID || isJustRendered) {
      svgViewport.selectEdgeById(selectedEdgeID);
    }

    if (highlightSchema) {
      this.highlightNodes(highlightSchema);
    }
  }

  componentWillUnmount() {
    this._currentTypeGraph = null;
    this._cleanupSvgViewport();
  }

  _renderSvgAsync(typeGraph: TypeGraph | null) {
    if (typeGraph == null) {
      return; // Nothing to render
    }

    if (typeGraph === this._currentTypeGraph) {
      return; // Already rendering in background
    }

    this._currentTypeGraph = typeGraph;

    const { onSelectNode, onSelectEdge } = this.props;
    renderSvg(typeGraph)
      .then((svg) => {
        if (typeGraph !== this._currentTypeGraph) {
          return; // One of the past rendering jobs finished
        }

        this._cleanupSvgViewport();
        const svgViewport = new Viewport(
          svg,
          this._containerRef.current!,
          onSelectNode,
          onSelectEdge,
        );
        this.setState({ svgViewport });
      })
      .catch((rawError) => {
        this._currentTypeGraph = null;

        const error =
          rawError instanceof Error
            ? rawError
            : new Error('Unknown error: ' + String(rawError));
        this.setState(() => {
          throw error;
        });
      });
  }

  render() {
    const isLoading = this.state.svgViewport == null;
    return (
      <Box
        sx={(theme) => ({
          flex: 1,
          position: 'relative',
          display: 'inline-block',
          width: '100%',
          height: '100%',
          maxHeight: '100%',

          [theme.breakpoints.down('md')]: {
            height: '50%',
            maxWidth: 'none',
          },
        })}
      >
        <Box
          ref={this._containerRef}
          sx={{
            height: '100%',
            '& > svg': {
              height: '100%',
              width: '100%',
            },
          }}
        />
        {isLoading && <LoadingAnimation />}
      </Box>
    );
  }

  focusNode(id: string) {
    const { svgViewport } = this.state;
    if (svgViewport) {
      svgViewport.focusElement(id);
    }
  }

  highlightNodes(schema: IntrospectionSchema) {
    console.log(schema);

    [...document.getElementsByClassName('highlighted-schema')].forEach(
      (el) => el.classList.remove('highlighted-schema')
    );

    Object.values(schema.types).forEach((type) => {
      if (type.name.startsWith('__')) {
        return;
      }

      // Highlight type
      const $type = document.getElementById(`TYPE::${type.name}`);

      if ($type) {
        $type.classList.add('highlighted-schema')
      }

      // Highlight fields
      ((type as IntrospectionObjectType).fields || []).forEach((field) => {
        const $field = document.getElementById(`FIELD::${type.name}::${field.name}`);

        if ($field) {
          $field.classList.add('highlighted-schema');
        }
      })
    });
  }

  _cleanupSvgViewport() {
    const { svgViewport } = this.state;
    if (svgViewport) {
      svgViewport.destroy();
    }
  }
}
