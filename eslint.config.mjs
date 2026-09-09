import antfu from "@antfu/eslint-config";
import drizzle from "eslint-plugin-drizzle";
import tailwind from "eslint-plugin-tailwindcss";
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu({
    type: "app",
    typescript: true,
    formatters: true,
    vue: true,
    ignores: ["node_modules", "app/utils/db/migrations"],
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    rules: {
      "@typescript-eslint/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": "off",
      "node/prefer-global/process": "off",
      "perfectionist/sort-imports": ["error"],
      "unicorn/filename-case": ["error", { case: "kebabCase", ignore: ["README.md"] }],
      "node/no-process-env": ["error"],
    },
  }),
  {
    plugins: {
      drizzle,
    },
    rules: drizzle.configs.recommended.rules,
  },
  /** @type {import('eslint-plugin-tailwindcss').PluginSettings} */
  {
    ...tailwind.configs.recommended,
    files: ["**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}"],
    settings: {
      tailwindcss: {
        cssConfigPath: "./app/assets/css/main.css",
      },
    },
    rules: {
      "tailwindcss/no-custom-classname": ["warn", { whitelist: ["theme-controller", "max-sm:footer-center", "swap-on", "swap-off", "dropdown-content"] }],
    },
  },
);
