import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../src/components/MUITheme';
import { GraphQLVoyager } from '../src';
import LogoIcon from './icons/logo-small.svg';

import { IntrospectionModal } from './IntrospectionModal';
import { defaultPreset } from './presets';

import './components.css';

export default class Demo extends React.Component {
  state = {
    changeSchemaModalOpen: false,
    introspection: defaultPreset,
  };

  constructor(props) {
    super(props);

    const currentUrl = new URL(window.location.href);
    const url = currentUrl.searchParams.get('url');
    const withCredentials = currentUrl.searchParams.get('withCredentials');

    if (url) {
      this.state.introspection = (introspectionQuery) =>
        fetch(url, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: introspectionQuery }),
          ...(withCredentials === 'true'
            ? { credentials: 'include', mode: 'cors' }
            : {}),
        }).then((response) => response.json());
    }
  }

  public render() {
    const { changeSchemaModalOpen, introspection } = this.state;

    const openChangeSchema = () =>
      this.setState({ changeSchemaModalOpen: true });
    const closeChangeSchema = () =>
      this.setState({ changeSchemaModalOpen: false });

    return (
      <ThemeProvider theme={theme}>
        <GraphQLVoyager introspection={introspection}>
          <GraphQLVoyager.PanelHeader>
            <div className="voyager-panel">
              <Logo />
              <Button
                color="primary"
                style={{ color: 'white' }}
                variant="contained"
                onClick={openChangeSchema}
              >
                Change Schema
              </Button>
            </div>
          </GraphQLVoyager.PanelHeader>
        </GraphQLVoyager>
        <IntrospectionModal
          open={changeSchemaModalOpen}
          onClose={closeChangeSchema}
          onChange={(introspection) => this.setState({ introspection })}
        />
      </ThemeProvider>
    );
  }
}

function Logo() {
  return (
    <div className="voyager-logo">
      <a
        href="https://github.com/IvanGoncharov/graphql-voyager"
        target="_blank"
        rel="noreferrer"
      >
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

const reactRoot = ReactDOMClient.createRoot(document.getElementById('root'));
reactRoot.render(<Demo />);
