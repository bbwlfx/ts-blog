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
      [
        'import',
        {
          libraryName: 'antd',
          style: true 
        }
      ],
      env === 'ssr'
        ? 'dynamic-import-node'
        : '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      [
        'babel-plugin-module-resolver',
        {
          cwd: 'babelrc',
          extensions: ['.ts', '.tsx'],
          root: ['./']
        }
      ],
      'react-loadable/babel'
    ]
  }
}