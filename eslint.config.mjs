import globals from "globals";
import pluginJs from "@eslint/js";
import pluginNext from "eslint-config-next";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import url from "node:url";
import eslint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [tseslint.configs.recommended, ...compat.extends("next")];
/** @type {import('eslint').Linter.Config[]} */
const f = [
  //{ extends: [pluginNext] },

  pluginNext.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], ignores: [".next/*"] },
  { languageOptions: { globals: globals.browser } },
  //pluginNext.configs.flat.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];

