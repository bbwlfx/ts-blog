module.exports = api => {
  const env = api.env();
  // 服务端渲染时不加载css
  const importConfig =
    env === "client"
      ? {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true
        }
      : {
          libraryName: "antd"
        };

  return {
    presets: [
      [
        "@babel/env",
        {
          modules: env === "ssr" ? false : "commonjs",
          targets: {
            browsers: ["last 2 versions"]
          }
        }
      ],
      "@babel/react",
      "@babel/typescript"
    ],
    plugins: [
      "transform-decorators-legacy",
      ["import", importConfig],
      "dynamic-import-node",
      "@babel/plugin-proposal-class-properties",
      [
        "babel-plugin-module-resolver",
        {
          cwd: "babelrc",
          extensions: [".ts", ".tsx"],
          root: ["./"],
          alias: {
            components: "./js/components",
            containers: "./js/containers",
            models: "./js/models",
            decorators: "./js/decorators",
            constants: "./js/constants",
            lib: "./js/lib"
          }
        }
      ],
      "react-loadable/babel"
    ]
  };
};
