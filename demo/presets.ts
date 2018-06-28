const githubIntrospection = require('./presets/github_introspection.json');
const swapiIntrospection = require('./presets/swapi_introspection.json');
const yelpIntrospection = require('./presets/yelp_introspection.json');
const shopifyIntrospection = require('./presets/shopify_introspection.json');

export const PRESETS = {
  'Star Wars': swapiIntrospection,
  Yelp: yelpIntrospection,
  'Shopify Storefront': shopifyIntrospection,
  GitHub: githubIntrospection,
};
