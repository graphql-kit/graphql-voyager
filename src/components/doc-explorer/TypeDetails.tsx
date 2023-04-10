import * as _ from 'lodash';

import { SimplifiedTypeWithIDs } from '../../introspection/types';
import Markdown from '../utils/Markdown';
import Description from './Description';
import EnumValue from './EnumValue';
import WrappedTypeName from './WrappedTypeName';

interface TypeDetailsProps {
  type: SimplifiedTypeWithIDs;
  onTypeLink: (any) => void;
}

export default function TypeDetails(props: TypeDetailsProps) {
  const { type, onTypeLink } = props;

  return (
    <div className="type-details">
      <header>
        <h3>{type.name}</h3>
        <Description className="-doc-type" text={type.description} />
      </header>
      <div className="doc-categories">
        {renderFields(type, onTypeLink)}
        {renderEnumValues(type)}
      </div>
    </div>
  );
}

function renderFields(type: SimplifiedTypeWithIDs, onTypeLink) {
  if (_.isEmpty(type.inputFields)) return null;

  return (
    <div className="doc-category">
      <div className="title">fields</div>
      {_.map(type.inputFields, (field) => {
        return (
          <div key={field.id} className="item">
            <a className="field-name">{field.name}</a>
            <WrappedTypeName container={field} onTypeLink={onTypeLink} />
            <Markdown
              text={field.description}
              className="description-box -field"
            />
          </div>
        );
      })}
    </div>
  );
}

function renderEnumValues(type: SimplifiedTypeWithIDs) {
  if (_.isEmpty(type.enumValues)) return null;

  return (
    <div className="doc-category">
      <div className="title">values</div>
      {_.map(type.enumValues, (value) => (
        <EnumValue key={value.name} value={value} />
      ))}
    </div>
  );
}
