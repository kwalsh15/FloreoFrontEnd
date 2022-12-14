import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { FloreoApp } from './FloreoApp';
import { store } from './store';

import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <HashRouter>
        <FloreoApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
