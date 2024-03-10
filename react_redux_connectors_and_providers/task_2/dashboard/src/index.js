import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App/App';
import { uiReducer } from './reducers/uiReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));

// createStoreの引数にuiReducerとapplyMiddleware(thunk)を渡して、redux-thunkミドルウェアを適用する
const store = createStore(
  uiReducer,
  applyMiddleware(thunk)
);

// Providerでコンポーネント全体を囲むことで、その中で指定したstoreが使えるようになる
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
