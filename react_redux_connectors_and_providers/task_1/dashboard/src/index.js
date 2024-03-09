import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App/App';
import { uiReducer } from './reducers/uiReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));

// uiReducerを使用してReduxストアを作成
const store = createStore(uiReducer);

// Providerでコンポーネント全体を囲むことで、その中で指定したstoreが使えるようになる
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
