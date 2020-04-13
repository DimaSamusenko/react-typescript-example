import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';

import 'typeface-open-sans';

import {config} from "./config";

import {App} from './components/app/app.component';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector(config.rootSelector)
);
