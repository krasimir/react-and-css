import React from 'react';
import ReactDOM from 'react-dom';
import CSSX from '../../lib/CSSX';

class Component extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: '#000' };
  }
  render() {
    return (
      <CSSX styles={ this.css.bind(this) }>
        <h1>Hello world</h1>
        <input
          defaultValue='#000'
          type='text'
          onChange={ this._handleColorChange.bind(this) }
          />
      </CSSX>
    );
  }
  css() {    
    return <style>
      h1 {
        color: {{ this.state.color }};
      }
    </style>;
  }
  _handleColorChange(e) {
    this.setState({ color: e.target.value });
  }
}

ReactDOM.render(<Component />, document.querySelector('#content'));