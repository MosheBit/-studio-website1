import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/server/**/*.{js,mjs,cjs}"], // רק לקבצי Node.js
    env: { node: true },
  },
  {
    files: ["src/client/**/*.{js,jsx}"], // רק לקבצי דפדפן
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
