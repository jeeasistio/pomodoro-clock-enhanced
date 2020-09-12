SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@16.13.1/umd/react.production.min.js',
    'react-dom': 'react-dom@16.13.1/umd/react-dom.production.min.js',
    '@material-ui': '@material-ui/core@latest/umd/material-ui.production.min.js',
    'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js',
    'react-moment': 'https://cdn.jsdelivr.net/npm/react-moment@0.9.7/dist/index.min.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./app.jsx')
  .catch(console.error.bind(console));