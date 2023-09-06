/** @type {import('prettier').Config} */
module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 80,
  importOrder: [
    '^react',
    '<THIRD_PARTY_MODULES>',
    '@/.*',
    '^./(.*)',
    '^../(.*)',
  ],
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,

  ignore: ['build/**', 'dist/**', '.next/**', '/node_modules']
};
