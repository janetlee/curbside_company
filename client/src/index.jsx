import babelPolyfill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{

  render() {
    return (
      <div>
      test text
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));