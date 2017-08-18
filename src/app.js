import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css';
import './app.css';

import App from 'containers/App/App';
import { browserHistory } from 'react-router';
import makeRoutes from './routes';

const moundNode = document.querySelector('#root');
const routes = makeRoutes();

console.log('123123');
console.log(routes);

ReactDOM.render(
  <App 
    history={browserHistory} 
    routes={routes} />, 
  moundNode
);