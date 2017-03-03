const reactToolboxVariables = {
  'color-primary': 'var(--palette-cyan-500)'
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
