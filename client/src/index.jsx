import babelPolyfill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Dashboard from './components/Dashboard.jsx';

ReactDOM.render(<Dashboard />, document.getElementById('app'));