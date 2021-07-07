import { UserConfig } from "vite";    
import reactRefresh from '@vitejs/plugin-react-refresh'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const configBase: UserConfig = {
    plugins: [
      reactRefresh(),
    ],
    envDir: 'envs',
    build: {
      outDir: '.dist'
    },
    // esbuild: {
    //   jsxInject: `import React from 'react';`
    // },
  }
  if (command === 'build') {
    configBase.plugins.push(legacy({
      targets: ['defaults'],
      // additionalLegacyPolyfills: ['regenerator-runtime/runtime'] 
    }))
    Object.assign(configBase, {
      // base: '//cdn.baidu.com/assets/',
      base: '//localhost:3001/',
    })
  }
  return configBase
}
