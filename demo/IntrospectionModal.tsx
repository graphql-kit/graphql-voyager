import * as React from 'react';

import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {
  buildSchema,
  getIntrospectionQuery,
  introspectionFromSchema,
} from 'graphql/utilities';

import { PRESETS, defaultPresetName } from './presets';

enum InputType {
  Presets = 'Presets',
  SDL = 'SDL',
  Introspection = 'Introspection',
}

const initialConfig = {
  inputType: InputType.Presets,
  activePreset: defaultPresetName,
  sdlText: '',
  jsonText: '',
};

interface IntrospectionModalProps {
  open: boolean;
  onClose: () => void;
  onChange: (introspection: any) => void;
}

export function IntrospectionModal(props: IntrospectionModalProps) {
  const { open, onChange, onClose } = props;

  const [submitted, setSubmitted] = React.useState(initialConfig);

  const [inputType, setInputType] = React.useState(submitted.inputType);
  const [sdlText, setSDLText] = React.useState(submitted.sdlText);
  const [jsonText, setJSONText] = React.useState(submitted.jsonText);
  const [activePreset, setActivePreset] = React.useState(submitted.activePreset);

  return (
    <IntrospectionDialog open={open} onCancel={handleCancel} onSubmit={handleSubmit}>
      <TabContext value={inputType}>
        <TabList
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          onChange={(_, activeTab) => setInputType(activeTab)}
        >
          <Tab value={InputType.Presets} label={InputType.Presets} />
          <Tab value={InputType.SDL} label={InputType.SDL} />
          <Tab value={InputType.Introspection} label={InputType.Introspection} />
        </TabList>
        <TabPanel value={InputType.Presets}>
          <PresetsTab activePreset={activePreset} onPresetChange={setActivePreset} />
        </TabPanel>
        <TabPanel value={InputType.SDL}>
          <SDLTab sdlText={sdlText} onSDLTextChange={setSDLText} />
        </TabPanel>
        <TabPanel value={InputType.Introspection}>
          <IntrospectionTab jsonText={jsonText} onJSONTextChange={setJSONText} />
        </TabPanel>
      </TabContext>
    </IntrospectionDialog>
  );

  function handleCancel() {
    setInputType(submitted.inputType);
    setSDLText(submitted.sdlText);
    setJSONText(submitted.jsonText);
    setActivePreset(submitted.activePreset);
    onClose();
  }

  function handleSubmit() {
    switch (inputType) {
      case InputType.Presets:
        onChange(PRESETS[activePreset]);
        break;
      case InputType.Introspection:
        onChange(JSON.parse(jsonText));
        break;
      case InputType.SDL:
        onChange({
          data: introspectionFromSchema(buildSchema(sdlText)),
        });
        break;
    }
    setSubmitted({ inputType, sdlText, jsonText, activePreset });
    onClose();
  }
}

function IntrospectionDialog({ open, onCancel, onSubmit, children }) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      scroll="paper"
      PaperProps={{
        sx: {
          '&': {
            width: 0.9,
            height: 0.9,
            maxWidth: 800,
            maxHeight: 400,
          },
        }
      }}
    >
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{ background: '#eeeeee' }}
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          style={{ color: 'white' }}
          onClick={onSubmit}
        >
          Display
        </Button>
      </DialogActions>
    </Dialog >
  );
}

function PresetsTab({ activePreset, onPresetChange }) {
  const presetNames = Object.keys(PRESETS);

  return (
    <Box sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr"
      },
      gridTemplateRows: {
        xs: "1fr",
        sm: "100% 100%",
      },
      gap: "30px",
    }}>
      {presetNames.map((name) => (
        <Button
          color={activePreset === name ? "primary" : "secondary"}
          variant="outlined"
          key={name}
          onClick={() => onPresetChange(name)}
          sx={{
            boxShadow: "0px 0 8px 2px",
            textTransform: "none",
          }}
        >
          <Typography
            component="span"
            variant="h5"
          >
            {name}
          </Typography></Button>
      ))}
    </Box>
  );
}

function SDLTab({ sdlText, onSDLTextChange }) {
  return (
    <TextField
      required
      multiline
      fullWidth
      rows={9}
      value={sdlText}
      placeholder="Paste SDL Here"
      onChange={(event) => onSDLTextChange(event.target.value)}
    />
  );
}

function IntrospectionTab({ jsonText, onJSONTextChange }) {
  const [isCopied, setIsCopied] = React.useState(false);
  return (
    <Stack spacing={1} justifyContent="flex-start" alignItems="center">
      <Box>
        Run the introspection query against a GraphQL endpoint.
        Paste the result into the textarea below to view the model relationships.
      </Box>
      <Tooltip
        title="Copied!"
        open={isCopied}
        onClose={() => setIsCopied(false)}
        leaveDelay={1500}
      >
        <Button
          variant="outlined"
          startIcon={<ContentCopyIcon />}
          color="primary"
          size="small"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={async () => {
            await navigator.clipboard.writeText(getIntrospectionQuery());
            setIsCopied(true);
          }}
        >
          Copy Introspection Query
        </Button>
      </Tooltip>
      <TextField
        required
        multiline
        fullWidth
        rows={5}
        value={jsonText}
        placeholder="Paste Introspection Here"
        onChange={(event) => onJSONTextChange(event.target.value)}
      />
    </Stack>
  );
}
