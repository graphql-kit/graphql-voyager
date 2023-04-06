import { IntrospectionEnumValue } from 'graphql';

export interface SimplifiedArg {
  name: string;
  description: string;
  defaultValue: any;
  typeWrappers: Array<'NON_NULL' | 'LIST'>;
  id?: string;
}

export interface SimplifiedField<T> {
  name: string;
  type: T;
  id?: string;
  relayType?: T;
  description: string;
  typeWrappers: Array<'NON_NULL' | 'LIST'>;
  isDeprecated: boolean;
  deprecationReason?: string;
  args: {
    [name: string]: SimplifiedArg;
  };
  relayArgs?: {
    [name: string]: SimplifiedArg;
  };
}

export type SimplifiedInputField = SimplifiedArg;

export interface SimplifiedTypeBase {
  kind: 'OBJECT' | 'INTERFACE' | 'UNION' | 'ENUM' | 'INPUT_OBJECT' | 'SCALAR';
  name: string;
  description: string;
  enumValues?: Array<IntrospectionEnumValue>;
  inputFields?: {
    [name: string]: SimplifiedInputField;
  };

  isRelayType?: boolean;
}

export type SimplifiedType = SimplifiedTypeBase & {
  fields?: {
    [name: string]: SimplifiedField<string>;
  };
  interfaces?: Array<string>;
  derivedTypes?: Array<string>;
  possibleTypes?: Array<string>;
};

export type SimplifiedTypeWithIDs = SimplifiedTypeBase & {
  id: string;
  fields?: {
    [name: string]: SimplifiedField<SimplifiedTypeWithIDs>;
  };
  interfaces?: Array<{
    id: string;
    type: SimplifiedTypeWithIDs;
  }>;
  derivedTypes?: Array<{
    id: string;
    type: SimplifiedTypeWithIDs;
  }>;
  possibleTypes?: Array<{
    id: string;
    type: SimplifiedTypeWithIDs;
  }>;
};

export interface SimplifiedIntrospection {
  types: {
    [typeName: string]: SimplifiedType;
  };
  queryType: string;
  mutationType: string | null;
  subscriptionType: string | null;
}

export interface SimplifiedIntrospectionWithIds {
  types: {
    [typeName: string]: SimplifiedTypeWithIDs;
  };
  queryType: SimplifiedTypeWithIDs;
  mutationType: SimplifiedTypeWithIDs | null;
  subscriptionType: SimplifiedTypeWithIDs | null;
}
