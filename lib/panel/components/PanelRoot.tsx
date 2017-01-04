import * as React from "react";
import { connect } from "react-redux"

import {
  changeIntrospection,
  changeSortByAlphabet,
  changeSkipRelay,
} from '../../actions/';

interface PanelRootProps {
  isLoading: boolean;
  sortByAlphabet: boolean;
  skipRelay: boolean;
}

function mapStateToProps(state) {
  return {
    isLoading: !state.svgRenderingFinished,
    sortByAlphabet: state.displayOptions.sortByAlphabet,
    skipRelay: state.displayOptions.skipRelay,
  };
}

class PanelRoot extends React.Component<PanelRootProps, void> {
  render() {
      let {isLoading, sortByAlphabet, skipRelay} = this.props;
      var dispatch = this.props['dispatch'];
      return (
        <div>
          <h1>GraphQL Voyager</h1>
          {isLoading &&
          <h2>
            Loading
          </h2>
          }
          <input type="radio" name="introspection" value="swapi"/> SWAPI<br/>
          <input type="radio" name="introspection" value="github"/> GitHub<br/>
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
