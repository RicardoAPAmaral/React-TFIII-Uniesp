import React from 'react';
import ReactDOM from 'react-dom'; // Importe o ReactDOM corretamente

import './index.css';
import Home from './pages/Home';
import Header from './components/Header';

/*ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
);*/

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
