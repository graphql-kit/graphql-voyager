import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { GraphQLVoyager } from '../src';
import { theme } from '../src/components/MUITheme';
import { IntrospectionModal } from './IntrospectionModal';
import { defaultPreset, PRESETS } from './presets';

interface DemoProps {
  introspection: any;
  presets?: { [name: string]: any };
}

function Demo(props: DemoProps) {
  const [introspection, setIntrospection] = useState(() => props.introspection);
  const [changeSchemaModalOpen, setChangeSchemaModalOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GraphQLVoyager introspection={introspection} hideVoyagerLogo={false}>
        <GraphQLVoyager.PanelHeader>
          <Stack padding={({ panelSpacing }) => `0 ${panelSpacing}`}>
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
