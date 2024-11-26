import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
const patchedConfig = fixupConfigRules([
  ...compat.extends("next/core-web-vitals"),
]);
const config = [
  //...patchedConfig,
  ...compat.extends("next/core-web-vitals"),

  pluginReact.configs.flat.recommended,
  //pluginReact.configs.flat["jsx-runtime"], // Add this if you are using React 17+
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [".next/*"],
    plugins: {
      pluginReact,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.serviceworker },
      ...pluginReact.configs.flat.recommended.languageOptions,
    },
  },
  ...tseslint.configs.recommended,
  //...compat.extends("next/typescript"),
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-anonymous-default-export": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
//export default config;
export default tseslint.config(
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["./.next/**/*", "**/*.config.mjs"],
    //extends: [tseslint.configs.recommended],
  },
  pluginReact.configs.flat.recommended,
  tseslint.configs.recommended,
  //...compat.extends("next/typescript"),
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.serviceworker },
      ...pluginReact.configs.flat.recommended.languageOptions,
    },
  },
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
            //"allow-object-types": 'warn',
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  }
);

/** @type {import('eslint').Linter.Config[]} */
const conf = [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: ["./.next/**/*", "**/*.config.mjs"],
    //plugins: { react: pluginReact },
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.serviceworker },
      ...pluginReact.configs.flat.recommended.languageOptions,
    },
  },
  //pluginJs.configs.recommended,
  //...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"], // Add this if you are using React 17+
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
  //...compat.extends("plugin:@tanstack/eslint-plugin-query/recommended"),
  //...compat.extends("prettier"),
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "import/no-anonymous-default-export": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
