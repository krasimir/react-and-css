import React from 'react';
import ReactDOM from 'react-dom';
// import CSSX from 'react-cssx';
// import CSSX from '../../../lib/CSSX.js';
import CSSX from '../../../src/CSSX.jsx';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#000'
    }
  }
  render() {
    return (
      <CSSX styles={ this.css() }>
        <h1>Title styled with <i>CSSX</i></h1>
        <input defaultValue='#000' type='text' onChange={ this._change.bind(this) } />
      </CSSX>
    );
  }
  css() {
    return (
      <style>
        h1 {
          color: {{ this.state.color }};
        }
        h1 i {
          text-decoration: underline;
        }
        @media (max-width: 600px) {
          h1 {
            color: red;
          }
        }
      </style>
    );
  }
  _change(e) {
    this.setState({ color: e.target.value });
  }
}

class Replacement extends React.Component {
  render() {
    return <p>Something else</p>;
  }
}

var content = document.querySelector('#content');
var button = document.querySelector('button');

ReactDOM.render(<Component />, content);
button.addEventListener('click', function () {
  ReactDOM.render(<Replacement />, content);
});
