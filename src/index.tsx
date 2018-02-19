import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { pizzaSizes } from './reducers';
import { StoreState } from './types';
import PizzaSizes from './containers/PizzaSizes';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const preloadedState: StoreState = {
  loading: false,
  pizzaSizes: [],
  currentSizeIndex: null
};
const store = createStore<StoreState>(pizzaSizes, preloadedState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <PizzaSizes name="Adrian" />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
