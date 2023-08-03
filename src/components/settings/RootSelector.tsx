import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { GraphQLCompositeType } from 'graphql/type';

import { isNode, TypeGraph } from '../../graph/';

interface RootSelectorProps {
  typeGraph: TypeGraph;
  onChange: (rootType: string) => void;
}

export default function RootSelector(props: RootSelectorProps) {
  const { typeGraph, onChange } = props;
  const { schema } = typeGraph;

  const rootType = typeGraph.rootType.name;
  const operationRootTypes: ReadonlyArray<GraphQLCompositeType> = [
    schema.getQueryType(),
    schema.getMutationType(),
    schema.getSubscriptionType(),
  ].filter((type) => type != null);

  const otherTypeNames = Object.values(schema.getTypeMap())
    .filter((type) => isNode(type) && !operationRootTypes.includes(type))
    .map((type) => type.name)
    .sort();

  return (
    <Select
      fullWidth
      variant="standard"
      className="root-selector"
      onChange={handleChange}
      value={rootType}
    >
      {operationRootTypes.map(({ name }) => (
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
