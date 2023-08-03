import './SearchBox.css';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { Component } from 'react';

interface SearchBoxProps {
  placeholder: string;
  value?: string;
  onSearch?: (value: string) => void;
}

interface SearchBoxState {
  value: string;
}

export default class SearchBox extends Component<
  SearchBoxProps,
  SearchBoxState
> {
  timeout = null;

  constructor(props: SearchBoxProps) {
    super(props);
    this.state = { value: props.value || '' };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;

    return (
      <div className="search-box-wrapper">
        <Input
          fullWidth
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          type="text"
          className="search-box"
          inputProps={{ 'aria-label': 'Description' }}
          endAdornment={
            value && (
              <InputAdornment position="end">
                <span className="search-box-clear" onClick={this.handleClear}>
                  ×
                </span>
              </InputAdornment>
            )
          }
        />
      </div>
    );
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ value });

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.onSearch(value);
    }, 200);
  };

  handleClear = () => {
    this.setState({ value: '' });
    clearTimeout(this.timeout);
    this.props.onSearch('');
  };
}
