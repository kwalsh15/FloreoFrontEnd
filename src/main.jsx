import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


import { BrowserRouter } from 'react-router-dom'

import { FloreoApp } from './FloreoApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FloreoApp />
    </BrowserRouter>
  </React.StrictMode>
);
