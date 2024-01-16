import React, { Component } from 'react';

import './badge.css';

class Badge extends Component {
  render() {
    const { context, ...props } = this.props;
    return <span className="badge" {...props}>{context}</span>;
  }
}

export default Badge;