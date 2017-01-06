import * as React from "react";
import { connect } from "react-redux"
import * as ReactModal from "react-modal";

import {
  changeIntrospectionToPreset,
  changeSortByAlphabet,
  changeSkipRelay,
  panelChangeIntrospectionLoadVisibility,
} from '../../actions/';

interface PanelRootProps {
  isLoading: boolean;
  sortByAlphabet: boolean;
  skipRelay: boolean;
  showIntrospectionLoad: boolean;
}

function mapStateToProps(state) {
  return {
    isLoading: !state.svgRenderingFinished,
    sortByAlphabet: state.displayOptions.sortByAlphabet,
    skipRelay: state.displayOptions.skipRelay,
    showIntrospectionLoad: state.panel.showIntrospectionLoad,
  };
}

class PanelRoot extends React.Component<PanelRootProps, void> {
  render() {
      let {
        isLoading,
        sortByAlphabet,
        skipRelay,
        showIntrospectionLoad,
      } = this.props;
      var dispatch = this.props['dispatch'];
      return (
        <div>
          <h1>GraphQL Voyager</h1>
          {isLoading &&
          <h2>
            Loading
          </h2>
          }
          <ReactModal isOpen={showIntrospectionLoad}
            contentLabel="Load Introspection"
            onRequestClose={
              () => dispatch(panelChangeIntrospectionLoadVisibility(false))
            }
          >
            <form onSubmit={e => {
                e.preventDefault()
                var presetName = e.target['elements'].introspection.value
                dispatch(changeIntrospectionToPreset(presetName));
                dispatch(panelChangeIntrospectionLoadVisibility(false));
            }}>
              <input type="radio" name="introspection" value="swapi"/> SWAPI<br/>
              <input type="radio" name="introspection" value="github"/> GitHub<br/>
              <button type="submit"> Change Introspection </button>
            </form>
          </ReactModal>
          <button
            onClick={
              () => dispatch(panelChangeIntrospectionLoadVisibility(true))
            }
          > Load Introspection </button>
          <br/>
          <input type="checkbox" name="sortByAlphabet" checked={sortByAlphabet}
            onChange={
              (e) => dispatch(changeSortByAlphabet(e.target['checked']))
            }
          />
          sortByAlphabet <br/>
          <input type="checkbox" name="skipRelay" checked={skipRelay}
            onChange={
              (e) => dispatch(changeSkipRelay(e.target['checked']))
            }
          /> skipRelay
        </div>
      );
  }
}

export default connect(mapStateToProps)(PanelRoot);
