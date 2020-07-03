module.exports = {
  presets: [
    [
      "@babel/preset-typescript",
      {
        jsxPragma: "h",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "h",
      },
    ],
  ],
  sourceMaps: true,
};
