module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, "plugin:prettier/recommended"],
  plugins: ["jsx-a11y"],
  rules: { "prettier/prettier": ["error", { endOfLine: "auto" }] },
};
