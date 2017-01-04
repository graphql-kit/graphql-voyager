import * as React from "react";
import { connect } from "react-redux"

import {
  changeIntrospection,
  changeDisplayOptions,
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
          <input type="checkbox" name="sortByAlphabet" checked={sortByAlphabet}/>
          sortByAlphabet <br/>
          <input type="checkbox" name="skipRedux" checked={skipRelay}/> skipRedux
        </div>
      );
  }
}

export default connect(mapStateToProps)(PanelRoot);
