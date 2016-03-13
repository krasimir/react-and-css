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
    let cssScope = sheet.add('#' + cssScopeId)

    this.state = { cssScope, cssScopeId }
  }
  render() {    
    this.state.cssScope.d(this.props.styles);
    return <div id={ this.state.cssScopeId }>{ this.props.children }</div>;
  }
};

CSSX.propTypes = {
  styles: React.PropTypes.array.isRequired
};