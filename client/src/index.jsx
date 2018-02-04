import babelPolyfill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Monitor from './components/Monitor.jsx';

class App extends React.Component{

  render() {
    return (
      <div>
      test text
        <Monitor />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));