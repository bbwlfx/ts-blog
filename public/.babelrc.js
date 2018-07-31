module.exports = api => {
  const env = api.env();
  console.log('env: ', env);

  return {
    presets: [
      [
        '@babel/env',
        {
          modules: env === 'ssr' ? false : 'commonjs',
          targets: {
            browsers: ['last 2 versions']
          }
        }
      ],
      '@babel/react',
      '@babel/typescript'
    ],
    plugins: [
      'transform-decorators-legacy',
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css'
        }
      ],
       'dynamic-import-node',
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-module-resolver',
        {
          cwd: 'babelrc',
          extensions: ['.ts', '.tsx'],
          root: ['./'],
          alias: {
            components: './js/components',
            containers: './js/containers',
            models: './js/models',
            decorators: './js/decorators',
            constants: './js/constants'
          }
        }
      ],
      'react-loadable/babel'
    ]
  }
}