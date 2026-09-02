import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. Add the global ignores object as the FIRST item in the array
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**'],
  },

  // 2. Your Next.js compat configs
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // 3. Prettier config at the very end to override formatting rules
  eslintConfigPrettier,
];

export default eslintConfig;
