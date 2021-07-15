module.exports = (api) => {
  let targets
  let dev = api.env(['development', 'test'])
  api.caller((caller) => {
    if (caller && caller.target === 'node') {
      targets = { node: 'current' }
    } else if (caller && dev) {
      targets = 'last 2 Chrome versions'
    } else {
      targets = '> 0.5%, last 2 versions, not dead'
    }
    return true
  })
  return {
    plugins: ['react-hot-loader/babel', '@loadable/babel-plugin'],
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          modules: false,
          // caller.target 等于 webpack 配置的 target 选项
          targets,
        },
      ],
      '@babel/preset-react',
      [
        '@babel/preset-typescript',
        {
          isTSX: true,
          allExtensions: true,
        },
      ],
    ],
  }
}
