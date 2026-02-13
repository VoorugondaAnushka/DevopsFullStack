const js = require("@eslint/js");
const react = require("eslint-plugin-react");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: { react },
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly"
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off"
    }
  }
];