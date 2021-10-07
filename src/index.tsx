import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// components
import App from './components/App/App';

// others
import reportWebVitals from './reportWebVitals';

// store
import configureStore, { persistor } from './store/configureStore';

// styles
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
