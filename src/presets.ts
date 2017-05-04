const githubIntrospection = require('./introspection/presets/github_introspection.json');
const swapiIntrospection = require('./introspection/presets/swapi_introspection.json');
const yelpIntrospection = require('./introspection/presets/yelp_introspection.json');
const hslIntrospection = require('./introspection/presets/hsl_introspection.json');

window.VOYAGER_PRESETS = {
  'Star Wars': swapiIntrospection,
  'Yelp': yelpIntrospection,
  'OpenTripPlanner': hslIntrospection,
  'GitHub': githubIntrospection
}
