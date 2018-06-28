import * as React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './components.css';
import LogoIcon from './icons/logo-small.svg';

export class Logo extends React.Component {
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

export interface PanelProps {
  presets: string[];
  activePreset: string;

  onChange: (string) => any;
}

export class Panel extends React.Component<PanelProps> {
  handleChange = event => {
    this.props.onChange(event.target.value);
  };

  render() {
    const { presets, activePreset } = this.props;
    return (
      <div className="voyager-panel">
        <Logo />
        <Select value={activePreset} onChange={this.handleChange}>
          {presets.map(name => (
            <MenuItem value={name} key={name}>
              {name}
            </MenuItem>
          ))}
          <MenuItem value={'custom'}>
            <strong> {'<Your Schema>'} </strong>
          </MenuItem>
        </Select>
      </div>
    );
  }
}
