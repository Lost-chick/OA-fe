import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import Routes from './routes';
import stores from './stores'
import './index.css';
// import App from './App';

ReactDOM.render(
  <Provider {...stores}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
