import React, { Children, PropTypes } from 'react';
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

    sheet.scope(`[data-cssx='${cssScopeId}']`);

    this.state = { sheet, cssScopeId };
  }
  componentWillUnmount() {
    this.state.sheet.destroy();
  }
  render() {
    this.state.sheet.add(this.props.styles);

    return Children.only(React.cloneElement(this.props.children, {
      'data-cssx': this.state.cssScopeId,
    }));
  }
};

CSSX.propTypes = {
  styles: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};
