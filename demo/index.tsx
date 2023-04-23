import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { GraphQLVoyager } from '../src';
import { theme } from '../src/components/MUITheme';
import LogoIcon from './icons/logo-small.svg';
import { IntrospectionModal } from './IntrospectionModal';
import { defaultPreset, PRESETS } from './presets';

interface DemoProps {
  introspection: any;
  presets?: { [name: string]: any };
}

function Demo(props: DemoProps) {
  const [introspection, setIntrospection] = React.useState(
    () => props.introspection,
  );
  const [changeSchemaModalOpen, setChangeSchemaModalOpen] =
    React.useState(false);

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
              onClick={() => setChangeSchemaModalOpen(true)}
            >
              Change Schema
            </Button>
          </Stack>
        </GraphQLVoyager.PanelHeader>
      </GraphQLVoyager>
      <IntrospectionModal
        open={changeSchemaModalOpen}
        presets={props.presets}
        onClose={() => setChangeSchemaModalOpen(false)}
        onChange={setIntrospection}
      />
    </ThemeProvider>
  );
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

const currentUrl = new URL(window.location.href);
const url = currentUrl.searchParams.get('url');
const withCredentials = currentUrl.searchParams.get('withCredentials');

const introspection =
  url != null
    ? async (introspectionQuery: string) => {
        const response = await fetch(url, {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: introspectionQuery }),
          ...(withCredentials === 'true'
            ? { credentials: 'include', mode: 'cors' }
            : {}),
        });
        return response.json();
      }
    : defaultPreset;

const reactRoot = ReactDOMClient.createRoot(document.getElementById('root'));
reactRoot.render(<Demo introspection={introspection} presets={PRESETS} />);
