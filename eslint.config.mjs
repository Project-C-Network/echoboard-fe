import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});
const eslintConfig = [
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:security/recommended-legacy',
    ],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      semi: 'error',
      'spaced-comment': ['error', 'always'],
      'no-inline-comments': 'error',
      'multiline-comment-style': ['error', 'starred-block'],
      'no-warning-comments': [
        'error',
        {
          terms: ['TODO', 'FIXME'],
          location: 'start',
        },
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-eval': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
      'security/detect-object-injection': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-child-process': 'error',
      'security/detect-unsafe-regex': 'warn',
      '@typescript-eslint/naming-convention': 'error',
    },
  }),
];

eslintConfig.push({
  ignores: ['**/*', '!src/**'],
});

export default eslintConfig;
