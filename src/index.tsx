import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { pizzaSizes } from './reducers';
import { StoreState } from './types';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const preloadedState: StoreState = {
  loading: false,
  pizzaSizes: [],
  currentPizzaSize: null
};
const store = createStore<StoreState>(pizzaSizes, preloadedState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
