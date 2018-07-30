module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'transform-decorators-legacy',
    'dynamic-import-node',
    [
      'import',
      {
        libraryName: 'antd',
        style: true 
      }
    ],
    [
      'babel-plugin-module-resolver',
      {
        cwd: 'babelrc',
        alias: {
          components: '../public/js/components',
          containers: '../public/js/containers',
          models: '../public/js/models',
          controllers: './controllers',
          decorators: '../public/js/decorators',
          entry: '../public/js/entry'
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    ]
  ]
};