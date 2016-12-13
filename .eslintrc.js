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
    // Keep calm with semicolons, commas, consoles, and indent bix
    'semi': 0,
    'comma-dangle': 0,
    'no-console': 0,
    'indent': [ 0, 0],
    // extra
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
