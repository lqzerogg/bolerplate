function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web')
}
function isWebpack(caller) {
  // console.log('~~~~~~~~', caller.name)
  return Boolean(caller && caller.name === 'babel-loader')
}
function isNode(caller) {
  if (caller && caller.target === 'node') {
    return true
  }
}
module.exports = (api) => {
  let web = api.caller(isWebTarget)
  let node = api.caller(isNode)
  const webpack = api.caller(isWebpack)
  const dev = api.env(['development', 'test'])
  let targets
  const plugins = ['@loadable/babel-plugin']

  if (!webpack) {
    node = true
    web = false
  }

  if (node) {
    targets = { node: 'current' }
  } else if (dev) {
    targets = 'last 2 Chrome versions'
  } else {
    targets = '> 0.5%, last 2 versions, not dead'
  }

  if (web) {
    plugins.push('react-hot-loader/babel')
  }

  return {
    plugins,
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          corejs: web ? 'core-js@3' : false,
          // modules: webpack ? false : 'commonjs',
          modules: 'auto',
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
