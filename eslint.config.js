// eslint.config.js
import next from "eslint-config-next";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended";

export default tseslint.config(
  {
    ignores: [".next", "node_modules", "dist", "*.config.js"],
  },
  ...tseslint.configs.recommended,
  reactRecommended,
  next,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  }
);
// This file is used to configure ESLint for the Next.js application with TypeScript and React.