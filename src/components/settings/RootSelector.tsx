import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { getDefaultRoot, isNode } from '../../graph/';

interface RootSelectorProps {
  rootType?: string;
  schema: any;
  onChange: any;
}

export default function RootSelector(props: RootSelectorProps) {
  const { schema, onChange } = props;
  const rootType = props.rootType || getDefaultRoot(schema);

  const rootTypeNames = getRootTypeNames(schema);
  const otherTypeNames = Object.keys(schema.types)
    .map((id) => schema.types[id])
    .filter(isNode)
    .map((type) => type.name)
    .filter((name) => !rootTypeNames.includes(name))
    .sort();

  return (
    <Select
      fullWidth
      variant="standard"
      className="root-selector"
      onChange={handleChange}
      value={rootType}
    >
      {rootTypeNames.map((name) => (
        <MenuItem value={name} key={name}>
          <strong>{name}</strong>
        </MenuItem>
      ))}
      {otherTypeNames.map((name) => (
        <MenuItem value={name} key={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  );

  function handleChange(event) {
    const newRootType = event.target.value;
    if (newRootType !== rootType) {
      onChange(newRootType);
    }
  }
}

function getRootTypeNames(schema) {
  const { queryType, mutationType, subscriptionType } = schema;
  const names = [];
  if (queryType) {
    names.push(queryType.name);
  }
  if (mutationType) {
    names.push(mutationType.name);
  }
  if (subscriptionType) {
    names.push(subscriptionType.name);
  }
  return names;
}
