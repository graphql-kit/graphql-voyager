const githubIntrospection = require('./introspection/presets/github_introspection.json');
const swapiIntrospection = require('./introspection/presets/swapi_introspection.json');
const yelpIntrospection = require('./introspection/presets/yelp_introspection.json');
const shopifyIntrospection = require('./introspection/presets/shopify_introspection.json');

window.VOYAGER_PRESETS = {
  'Star Wars': swapiIntrospection,
  Yelp: yelpIntrospection,
  'Shopify Storefront': shopifyIntrospection,
  GitHub: githubIntrospection,
};
