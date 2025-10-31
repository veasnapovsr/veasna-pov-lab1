// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Node.js globals
        console: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
        __dirname: "readonly",

        // Mocha globals (for tests)
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
      },
    },
    rules: {
      // Example: turn off "no-console" rule if you use console.log
      "no-console": "off",
    },
  },
];
