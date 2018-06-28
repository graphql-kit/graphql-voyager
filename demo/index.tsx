import * as React from 'react';
import { render } from 'react-dom';

import { GraphQLVoyager } from '../src';

import { PRESETS } from './presets';

export default class Demo extends React.Component {
  public render() {
    return <GraphQLVoyager introspection={PRESETS['Star Wars']} />;
  }
}

render(<Demo />, document.getElementById('panel_root'));
