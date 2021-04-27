import React from 'react';
import ReactDOM from 'react-dom';
import Catalogue from './Catalogue';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

ReactDOM.render(
  <React.StrictMode>
    <Catalogue />
  </React.StrictMode>,
  document.getElementById('root')
);