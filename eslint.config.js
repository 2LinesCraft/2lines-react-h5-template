import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import airbnbStyleGuide from 'eslint-config-airbnb';
import airbnbTypeScript from 'eslint-config-airbnb-typescript';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import globals from 'globals';

const baseConfig = {
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  plugins: {
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
    'import': importPlugin,
    'jsx-a11y': jsxA11yPlugin,
  },
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.es2021,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: true,
    },
  },
  rules: {
    ...airbnbStyleGuide.rules,
    // React 相关
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    
    // Import 相关
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    
    // 代码风格
    'max-len': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'no-debugger': 'warn',
    
    // 其他
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
  },
};

const typeScriptConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    ...baseConfig.plugins,
    '@typescript-eslint': typescriptPlugin,
  },
  languageOptions: {
    parser: typescriptParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: ['./tsconfig.app.json', './tsconfig.node.json'],
      tsconfigRootDir: process.cwd(),
    },
    globals: {
      ...globals.browser,
      ...globals.es2021,
    },
  },
  settings: {
    ...baseConfig.settings,
    'import/resolver': {
      typescript: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
      },
      node: true,
    },
  },
  rules: {
    ...baseConfig.rules,
    ...airbnbTypeScript.rules,
    ...typescriptPlugin.configs.recommended.rules,
    // TypeScript 特定规则
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};

export default [
  {
    ignores: ['dist/**/*', 'node_modules/**/*', '**/*.d.ts'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    ...baseConfig,
  },
  typeScriptConfig,
];
