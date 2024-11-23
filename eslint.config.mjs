import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["./.next/**/*", "**/*.config.mjs"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  //pluginJs.configs.recommended,
  //...tseslint.configs.recommended,
  //pluginReact.configs.flat.recommended,
  ...compat.extends("next/core-web-vitals"),
  //...compat.extends("next/typescript"),
  //...compat.extends("plugin:@tanstack/eslint-plugin-query/recommended"),
  //...compat.extends("prettier"),
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "import/no-anonymous-default-export": "off",
    },
  },
];
