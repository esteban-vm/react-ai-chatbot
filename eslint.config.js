import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import sortExports from 'eslint-plugin-sort-exports'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      react.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      'sort-exports': sortExports,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-array-index-key': 'warn',
      'react/boolean-prop-naming': [
        'warn',
        {
          rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+',
        },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          multiline: 'last',
          reservedFirst: true,
          shorthandLast: true,
        },
      ],
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/prefer-destructuring': [
        'warn',
        {
          VariableDeclarator: {
            array: true,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: true,
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'sort-exports/sort-exports': [
        'warn',
        {
          sortDir: 'asc',
          sortExportKindFirst: 'type',
        },
      ],
    },
  },
])
