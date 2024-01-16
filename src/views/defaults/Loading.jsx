import React, { Component, useTransition } from 'react';
import './lazy-loading.css';

class Loading extends Component {

  render() {
    return (
      <div className="init-loading-container">
      	{this.props.iconElement}
      	<progress value={this.props.progress} max="100" dir="ltr"></progress>
      	<p className="title">{this.props.title}</p>
      	<p className="help-text"><i className="ico-lock"></i> End-to-end encrypted</p>
        {this.props.children}
      </div>
    );
  }
}

export default Loading;
// WhatsApp

{/*<div className="whatsapp-icon"></div>*/}