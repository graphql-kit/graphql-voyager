import * as React
  from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { theme } from '../src/components/MUITheme'
import { GraphQLVoyager } from '../src'
import LogoIcon
  from './icons/logo-small.svg'

import './components.css'

import typeGraph from './example/graph.json'

export default class Demo extends React.Component {
  state = {
    changeSchemaModalOpen: false,
  };

  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <GraphQLVoyager typeGraph={typeGraph}>
          <GraphQLVoyager.PanelHeader>
            <div className="voyager-panel">
              <Logo />
            </div>
          </GraphQLVoyager.PanelHeader>
        </GraphQLVoyager>
      </MuiThemeProvider>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <div className="voyager-logo">
        <a href="https://github.com/APIs-guru/graphql-voyager" target="_blank">
          <div className="logo">
            <LogoIcon />
            <h2 className="title">
              <strong>GraphQL</strong> Voyager
            </h2>
          </div>
        </a>
      </div>
    );
  }
}

render(<Demo />, document.getElementById('root'));
