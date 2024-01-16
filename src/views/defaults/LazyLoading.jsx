import React, { Component, useTransition } from 'react';

import Loading from './Loading';

class LazyLoading extends Component {

  render() {
    return <Loading title="WhatsApp" iconElement={<div className="whatsapp-icon"></div>} />;
  }
}

export default LazyLoading;