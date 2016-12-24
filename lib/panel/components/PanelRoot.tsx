import * as React from "react";

export interface PanelRootProps { }
export interface PanelRootState {
  loading: boolean;
}

export class PanelRoot extends React.Component<PanelRootProps, PanelRootState> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
      return (
        <div>
          <h1>GraphQL Voyager</h1>
          {this.state.loading &&
          <h2>
            Loading
          </h2>
          }
        </div>
      );
  }
}
