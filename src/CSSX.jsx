import React from 'react';
import 'cssx';

var ids = 0;
var getID = function (prefix) {
  return prefix + '-' + (++ids);
};

export default class CSSX extends React.Component {
  constructor(props) {
    super(props);

    let sheet = cssx(getID('cssx-styles'));
    let cssScopeId = getID('cssx-el');

    sheet.scope('#' + cssScopeId);

    this.state = { sheet, cssScopeId };
  }
  componentWillUnmount() {
    this.state.sheet.destroy();
  }
  render() {
    this.state.sheet.add(this.props.styles);
    return React.createElement(
      this.props['data-element'],
      {
        id: this.state.cssScopeId,
        ...this.props,
      },
      this.props.children
    );
  }
};

CSSX.propTypes = {
  styles: React.PropTypes.object.isRequired,
  'data-element': React.PropTypes.string
};

CSSX.defaultProps = {
  'data-element': 'div'
}
