import * as React from 'react';
import LoadingAnimation from './utils/LoadingAnimation';

import { Viewport } from './../graph/';

interface GraphViewportProps {
  svgRenderer: any;
  typeGraph: any;
  displayOptions: any;

  selectedTypeID: string;
  selectedEdgeID: string;

  onSelectNode: (id: string) => void;
  onSelectEdge: (id: string) => void;
}

export default class GraphViewport extends React.Component<GraphViewportProps> {
  state = { typeGraph: null, displayOptions: null, svgViewport: null };

  // Handle async graph rendering based on this example
  // https://gist.github.com/bvaughn/982ab689a41097237f6e9860db7ca8d6
  _currentTypeGraph = null;
  _currentDisplayOptions = null;

  static getDerivedStateFromProps(props, state) {
    const { typeGraph, displayOptions } = props;

    if (
      typeGraph !== state.typeGraph ||
      displayOptions !== state.displayOptions
    ) {
      return { typeGraph, displayOptions, svgViewport: null };
    }

    return null;
  }

  componentDidMount() {
    const { typeGraph, displayOptions } = this.props;
    this._renderSvgAsync(typeGraph, displayOptions);
  }

  componentDidUpdate(prevProps, prevState) {
    const { svgViewport } = this.state;

    if (svgViewport == null) {
      const { typeGraph, displayOptions } = this.props;
      this._renderSvgAsync(typeGraph, displayOptions);
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
    this._currentDisplayOptions = null;
    this._cleanupSvgViewport();
  }

  _renderSvgAsync(typeGraph, displayOptions) {
    if (typeGraph == null || displayOptions == null) {
      return; // Nothing to render
    }

    if (
      typeGraph === this._currentTypeGraph &&
      displayOptions === this._currentDisplayOptions
    ) {
      return; // Already rendering in background
    }

    this._currentTypeGraph = typeGraph;
    this._currentDisplayOptions = displayOptions;

    const { svgRenderer, onSelectNode, onSelectEdge } = this.props;
    svgRenderer
      .renderSvg(typeGraph, displayOptions)
      .then((svg) => {
        if (
          typeGraph !== this._currentTypeGraph ||
          displayOptions !== this._currentDisplayOptions
        ) {
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
      .catch((error) => {
        this._currentTypeGraph = null;
        this._currentDisplayOptions = null;

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
        <LoadingAnimation loading={isLoading} />
      </>
    );
  }

  resize() {
    const { svgViewport } = this.state;
    if (svgViewport) {
      svgViewport.resize();
    }
  }

  focusNode(id) {
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
