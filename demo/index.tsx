import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { theme } from '../src/components/MUITheme';
import { GraphQLVoyager } from '../src';
import LogoIcon from './icons/logo-small.svg';

import { IntrospectionModal } from './IntrospectionModal';
import { defaultPreset } from './presets';

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
            <Stack padding={({ panelSpacing }) => `0 ${panelSpacing}`}>
              <Logo />
              <Button
                color="primary"
                style={{ color: 'white' }}
                variant="contained"
                onClick={openChangeSchema}
              >
                Change Schema
              </Button>
            </Stack>
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
    <Link
      href="https://github.com/IvanGoncharov/graphql-voyager"
      target="_blank"
      rel="noreferrer"
      color="logoColor.main"
      underline="none"
      margin={2}
    >
      <Stack direction="row" justifyContent="center" spacing={1}>
        <Box>
          <SvgIcon
            inheritViewBox
            component={LogoIcon}
            sx={{ width: 50, height: 50, transform: 'rotateZ(16deg)' }}
          />
        </Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          textTransform="uppercase"
        >
          <Typography fontSize="21px" lineHeight={1} fontWeight="bold">
            GraphQL
          </Typography>
          <Typography fontSize="15px" lineHeight={1} letterSpacing={5}>
            Voyager
          </Typography>
        </Stack>
      </Stack>
    </Link>
  );
}

const reactRoot = ReactDOMClient.createRoot(document.getElementById('root'));
reactRoot.render(<Demo />);
