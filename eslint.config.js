// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      react,
      "@typescript-eslint": typescript,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
