import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import eslintReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: eslintReact,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...eslintReact.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/react-in-jsx-scope': 0,
      'react/jsx-no-target-blank': 'warn',
      '@typescript-eslint/no-unused-vars': 1,
      'import/order': [
        1,
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'index', 'object', 'type'],
          pathGroupsExcludedImportTypes: [],
        },
      ],
      'no-extra-boolean-cast': 0,
      'no-unused-expressions': 0,
      '@typescript-eslint/no-unused-expressions': 0,
    },
  }
);
