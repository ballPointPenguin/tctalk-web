module.exports = {
  extends: [
    "eslint:recommended",
    "eslint-config-react-app",
    "plugin:prettier/recommended",
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: "babel-eslint",
  plugins: ["graphql", "prettier"],
  rules: {
    strict: 0,
  },
}
