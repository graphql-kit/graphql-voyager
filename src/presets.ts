const githubIntrospection = require('./introspection/presets/github_introspection.json');
const swapiIntrospection = require('./introspection/presets/swapi_introspection.json');
const brandFolderIntrospection = require('./introspection/presets/brandfolder_introspection.json');
const hslIntrospection = require('./introspection/presets/hsl_introspection.json');

window.VOYAGER_PRESETS = {
  'Star Wars': swapiIntrospection,
  'BrandFolder': brandFolderIntrospection,
  'OpenTripPlanner': hslIntrospection,
  'GitHub': githubIntrospection
}
