import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import prettier from "eslint-config-prettier"
import globals from "globals"

export default tseslint.config(
  {
    ignores: ["dist/**", "build/**", "node_modules/**", ".react-router/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "prefer-const": "error",
    },
  },
  prettier
)
