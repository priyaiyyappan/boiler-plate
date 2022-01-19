import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from './store/store';

// const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>,
  document.querySelector('#root'),
);

