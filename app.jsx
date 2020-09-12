import React from 'react';
import ReactDOM from 'react-dom';
import Header from '/components/Header/Header.jsx';
import Main from '/components/Main/Main.jsx';
import { CssBaseline } from '@material-ui';

const App = () => {
  return (
    <CssBaseline>
      <div className="app">
        <Header />
        <Main />
      </div>
    </CssBaseline>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
)