export const CHANGE_SCHEMA = 'CHANGE_SCHEMA';
export function changeSchema(introspection: any, displayOptions?: any) {
  return {
    type: CHANGE_SCHEMA,
    payload: {
      introspection,
      displayOptions,
    },
  };
}
