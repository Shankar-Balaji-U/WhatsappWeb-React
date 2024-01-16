import React, { Component } from 'react';

import './button.css';

class RoundButton extends Component {

	render() {
    	return (
    		<button 
    			type={this.props.type || "button"} 
	    		aria-label={this.props.ariaLabel || this.props.title} 
	    		title={this.props.title} 
	    		tabIndex="0" 
    			className={`round-button${this.props.className ? " " + this.props.className: ""}`}>
    			{this.props.children}
    		</button>
    	);
  	}
}

export default RoundButton;