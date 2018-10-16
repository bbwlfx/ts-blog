module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/react",
    "@babel/typescript"
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "dynamic-import-node",
    [
      "babel-plugin-module-resolver",
      {
        cwd: "babelrc",
        alias: {
          components: "../public/js/components",
          containers: "../public/js/containers",
          models: "../public/js/models",
          controllers: "./controllers",
          decorators: "../public/js/decorators",
          server: "./public/buildServer",
          lib: "../public/js/lib"
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      }
    ]
  ]
};
