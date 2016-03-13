# Using vanilla CSS in React application

Yet another way to apply CSS styles in JavaScript. It's not using an inline styling though. It's injecting a `<style>` tag to your page.

```jsx
import React from 'react';
import CSSX from 'react-cssx';

class Component extends React.Component {
  render() {
    return (
      <CSSX styles={ this.css() }>
        <h1>Title styled with <i>CSSX</i></h1>
      </CSSX>
    );
  }
  css() {
    var color = '#BADA55';

    return (
      <style>
        h1 {
          color: {{ color }};
        }
        h1 i {
          text-decoration: underline;
        }
      </style>
    );
  }
}
```

To make the code above works you'll need:

* CSSX component (`npm install react-cssx`)
* CSSX transpiler (It's available [here](https://github.com/krasimir/cssx/tree/master/packages/cssx-transpiler). Get it as a [webpack loader](https://github.com/krasimir/cssx/blob/master/packages/cssx-loader) or [gulp plugin](https://github.com/krasimir/cssx/blob/master/packages/gulp-cssx).)

---



