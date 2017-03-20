const reactToolboxVariables = {
  'color-primary': 'var(--palette-cyan-500)',
  'preferred-font': '"helvetica neue", helvetica, arial, sans-serif'
};

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          variables: reactToolboxVariables
        }
      }
    })
  ]
}
