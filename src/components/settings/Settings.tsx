import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

import { TypeGraph } from '../../graph/type-graph';
import { VoyagerDisplayOptions } from '../Voyager';
import RootSelector from './RootSelector';

interface SettingsProps {
  typeGraph: TypeGraph | null;
  options: VoyagerDisplayOptions;
  onChange: (options: VoyagerDisplayOptions) => void;
}

// What is the reason to export this component by default?
export default function Settings(props: SettingsProps) {
  // Why you avoid destructuring component's parameters and doing it inside component's body?
  const { typeGraph, options, onChange } = props;
  // Move this outside of the component. No need to run all this code, including imports, if "typegraph == null".
  if (typeGraph == null) {
    return null;
  }

  return (
    <Stack
      // I would prefer if it was an iternal constant variable. Much cleaner JSX.
      // For example - const WRAPPER_STYLING = (theme) => { ... }
      sx={(theme) => ({
        position: 'absolute',
        opacity: 1,
        overflow: 'hidden',
        background: theme.palette.background.default,
        margin: 2,
        border: 1,
        borderColor: theme.palette.shadowColor.main,
        boxShadow: 2,
        padding: 1,
        // Obvious and useless hint, agree?
        // left-bottom corner
        left: 0,
        bottom: 0,
      })}
    >
      <RootSelector
        typeGraph={typeGraph}
        onChange={(rootType) => onChange({ rootType })}
      />
      <Stack direction="row" className="setting-other-options">
        {/* 4 similar checkboxes with labels. Create a data structure (Checkbox[]) and loop through its items rendering Checkbox + label on each step.
        Use "useMemo" for this data structure to avoid problems with re-renders. */}
        <Checkbox
          id="sort"
          checked={!!options.sortByAlphabet}
          onChange={(event) =>
            onChange({ sortByAlphabet: event.target.checked })
          }
        />
        <label htmlFor="sort">Sort by Alphabet</label>
        <Checkbox
          id="skip"
          checked={!!options.skipRelay}
          onChange={(event) => onChange({ skipRelay: event.target.checked })}
        />
        <label htmlFor="skip">Skip Relay</label>
        <Checkbox
          id="deprecated"
          checked={!!options.skipDeprecated}
          onChange={(event) =>
            onChange({ skipDeprecated: event.target.checked })
          }
        />
        <label htmlFor="deprecated">Skip deprecated</label>
        <Checkbox
          id="showLeafFields"
          checked={!!options.showLeafFields}
          onChange={(event) =>
            onChange({ showLeafFields: event.target.checked })
          }
        />
        <label htmlFor="showLeafFields">Show leaf fields</label>
      </Stack>
    </Stack>
  );
}
