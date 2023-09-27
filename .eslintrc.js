module.exports = {
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
