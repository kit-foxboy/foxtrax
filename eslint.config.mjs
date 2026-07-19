import antfu from "@antfu/eslint-config";
import tailwind from "eslint-plugin-tailwindcss";
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    typescript: true,
    formatters: true,
    vue: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    rules: {
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": "off",
      "node/prefer-global/process": "off",
      "perfectionist/sort-imports": ["error"],
      "unicorn/filename-case": ["error", { case: "kebabCase", ignore: ["README.md"] }],
    },
  }),
  /** @type {import('eslint-plugin-tailwindcss').PluginSettings} */
  {
    ...tailwind.configs.recommended,
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}"],
    settings: {
      tailwindcss: {
        cssConfigPath: "./app/assets/css/main.css",
      },
    },
  },
);
