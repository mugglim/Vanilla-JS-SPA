module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parser: '@babel/eslint-parser',
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'prettier/prettier': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'no-shadow': 0,
    },
    ignorePatterns: ['dist/', 'node_modules/'],
};
