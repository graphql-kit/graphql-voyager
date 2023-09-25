import { Component } from 'react';

import { renderSvg } from '../graph/svg-renderer';
import { TypeGraph } from '../graph/type-graph';
import { Viewport } from '../graph/viewport';
import LoadingAnimation from './utils/LoadingAnimation';

interface GraphViewportProps {
  typeGraph: TypeGraph | null;

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
    const { selectedTypeID, selectedEdgeID } = this.props;

    if (prevProps.selectedTypeID !== selectedTypeID || isJustRendered) {
      svgViewport.selectNodeById(selectedTypeID);
    }

    if (prevProps.selectedEdgeID !== selectedEdgeID || isJustRendered) {
      svgViewport.selectEdgeById(selectedEdgeID);
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
        const containerRef = this.refs['viewport'] as HTMLElement;
        const svgViewport = new Viewport(
          svg,
          containerRef,
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
      <>
        <div ref="viewport" className="viewport" />
        {isLoading && <LoadingAnimation />}
      </>
    );
  }

  resize() {
    const { svgViewport } = this.state;
    if (svgViewport) {
      svgViewport.resize();
    }
  }

  focusNode(id: string) {
    const { svgViewport } = this.state;
    if (svgViewport) {
      svgViewport.focusElement(id);
    }
  }

  _cleanupSvgViewport() {
    const { svgViewport } = this.state;
    if (svgViewport) {
      svgViewport.destroy();
    }
  }
}
