import { parse } from 'graphql/language';
import { buildSchema, introspectionFromSchema } from 'graphql/utilities';
import { KnownDirectivesRule } from 'graphql/validation/rules/KnownDirectivesRule';
import { specifiedSDLRules } from 'graphql/validation/specifiedRules';
import { validateSDL } from 'graphql/validation/validate';

const validationRules = specifiedSDLRules.filter(
  // Many consumes/produces SDL files with custom directives and without defining them.
  // This practice is contradict spec but is very widespread at the same time.
  (rule) => rule !== KnownDirectivesRule,
);

export function sdlToIntrospection(sdl: string) {
  const documentAST = parse(sdl);
  const errors = validateSDL(documentAST, null, validationRules);
  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join('\n\n'));
  }

  const schema = buildSchema(sdl, { assumeValidSDL: true });
  return introspectionFromSchema(schema);
}
