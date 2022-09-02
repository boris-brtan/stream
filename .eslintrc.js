module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'rules': {
        'arrow-spacing': ['error', {'before': true, 'after': true}],
        'comma-dangle': ['error', 'always-multiline'],
        'eol-last': 'error',
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'no-multiple-empty-lines': ['error', {'max':  1, 'maxBOF': 0}],
        'object-curly-spacing': ['error', 'always'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
    }
}
