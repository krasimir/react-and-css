import React from 'react';
import ReactDOM from 'react-dom';
import CSSX from 'react-cssx';
// import CSSX from '../../../lib/CSSX.js';

class Component extends React.Component {
  render() {
    return (
      <section>
        <p>First paragraph</p>
        <CSSX styles={ this.styleParagraph('#F00', 'second') } data-element='h1'>
          <p>Second paragraph</p>
        </CSSX>
        <CSSX styles={ this.styleParagraph('#00F', 'third') }>
          <p>Third paragraph</p>
        </CSSX>
      </section>
    );
  }
  styleParagraph(color, text) {
    return (
      <style>
        p {
          color: {{ color }};
        }
        p::before {
          content: {{ text }};
        }
      </style>
    );
  }
}

ReactDOM.render(<Component />, document.querySelector('#content'));
