module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      config: './tailwind.config.js',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime', // React 18 👀
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['.eslintrc.{js,cjs}', '*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'consistent-return': 'error',
  },
};
