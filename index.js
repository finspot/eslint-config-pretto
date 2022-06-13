require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,

  settings: {
    react: {
      version: 'detect',
    },
  },

  ignorePatterns: ['.cache', 'build', 'public'],

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true ,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'typescript',
    'typescript/react',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // eslint:recommended modifications
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-irregular-whitespace': 'off',
    'no-unused-vars': 'warn', // from `error` to `warn`
    'no-empty': ['error', { allowEmptyCatch: true }], // added `allowEmptyCatch`
    'no-extra-semi': 'off', // prettier purpose

    // plugin:react/recommended modifications
    'react/no-unescaped-entities': 'warn', // from `error` to `warn`
    'react/prop-types': 'warn',
    'react/react-in-jsx-scope': 'off',

    // react
    'react-hooks/exhaustive-deps': 'off',

    // custom eslint rules
    'default-case': 'warn',
    'dot-notation': 'warn',
    eqeqeq: 'error',
    'max-lines': ['warn', { max: 400, skipBlankLines: true, skipComments: true }],
    'no-alert': 'warn',
    'no-bitwise': 'warn',
    'no-caller': 'error',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-else-return': 'warn',
    'no-loop-func': 'warn',
    'no-multi-assign': 'error',
    'no-return-await': 'error',
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-rename': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-const': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'warn',
    'prefer-template': 'warn',
    'require-await': 'warn',
    'sort-imports': ['warn', { ignoreCase: true, ignoreDeclarationSort: true }],
    'spaced-comment': 'warn',
    yoda: 'warn',
  },

  overrides: [
    {
      files: '**/*.stories.tsx',
      rules: {
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      },
    },
  ],
}
