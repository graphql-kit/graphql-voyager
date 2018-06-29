import * as React from 'react';
import { render } from 'react-dom';
import Modal from '@material-ui/core/Modal';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { theme } from '../src/components/MUITheme';
import { GraphQLVoyager } from '../src';
import { Panel } from './components';

import { PRESETS } from './presets';
import { IntrospectionModal } from './IntrospectionModal';

export default class Demo extends React.Component {
  presetNames = Object.keys(PRESETS);

  state = {
    activePreset: this.presetNames[0],
    customPresetModalOpen: false,
    customPresetValue: null,
  };

  handlePresetChange = (activePreset: string) => {
    if (activePreset !== 'custom') {
      this.setState({ activePreset });
    } else {
      this.setState({ customPresetModalOpen: true });
    }
  };

  handleCustomPreset = (introspection: any) => {
    this.setState({ activePreset: null, customPresetValue: introspection });
  };

  handlePanelClose = () => {
    this.setState({ customPresetModalOpen: false });
  };

  public render() {
    const { activePreset, customPresetModalOpen, customPresetValue } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <GraphQLVoyager
          introspection={activePreset === null ? customPresetValue : PRESETS[activePreset]}
        >
          <GraphQLVoyager.PanelHeader>
            <Panel
              presets={this.presetNames}
              activePreset={this.state.activePreset}
              onChange={this.handlePresetChange}
            />
          </GraphQLVoyager.PanelHeader>
        </GraphQLVoyager>
        <Modal open={customPresetModalOpen} onClose={this.handlePanelClose}>
          <IntrospectionModal onClose={this.handlePanelClose} onChange={this.handleCustomPreset} />
        </Modal>
      </MuiThemeProvider>
    );
  }
}

render(<Demo />, document.getElementById('panel_root'));
