import * as React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '../icons/close-black.svg';

interface SearchBoxProps {
  placeholder: string;
  value?: string;
  onSearch?: (string) => void,
}

interface SearchBoxState {
  value: string
}

export default class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
  timeout = null;

  constructor(props) {
    super(props);
    this.state = { value: props.value || ''};
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;

    return (
      <Input
        placeholder={placeholder}
        value={value}
        onChange={this.handleChange}
        type="text"
        className="search-box"
        inputProps={{'aria-label': 'Description'}}
        endAdornment={value &&
          <InputAdornment position="end">
            <IconButton
              className="search-box-clear"
              onClick={this.handleClear}
            >
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    );
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ value });

    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.onSearch(value);
    }, 200);
  }

  handleClear = () => {
    this.setState({ value: '' });
    clearTimeout(this.timeout);
    this.props.onSearch('');
  }
}
