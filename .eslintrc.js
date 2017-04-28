module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // Keep calm a little bit buddy, go with the flow...
    'semi': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'indent': [ 0, 0],
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    // extra
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
