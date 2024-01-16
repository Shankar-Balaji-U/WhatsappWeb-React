import React, { Component, forwardRef } from 'react';

import ProfileImage from './ProfileImage';

import './button/button.css';

// Functional component that receives the forwarded ref
export const Button = forwardRef(
	(props, ref) => {
	// const { ref, ...rest } = props
	return (
  		<button ref={ref} {...props}>
    		<span className="context">
    			{props.children}
    		</span>
  		</button>);
	}
);




  // <Button className="button primary" onClick={this.handleClick.bind(this)}>
  //   OK, got it
  // </Button>




export class RoundButton extends Component {

	render() {
    	return (
    		<button 
    			type={this.props.type || "button"}
	    		aria-label={this.props.ariaLabel || this.props.title}  
	    		title={this.props.title}
	    		tabIndex="0"
    			className={`round-button${this.props.className ? " " + this.props.className: ""}`} 
    			style={{
    				width: this.props.width || '40px', 
    				height: this.props.height || '40px'}}>
    			{this.props.children}
    		</button>
    	);
  	}
}


export class ProfileButton extends Component {
	
	render() {
    	return (
    		<button 
    			type={this.props.type || "button"}
	    		aria-label={this.props.ariaLabel || this.props.title}  
	    		title={this.props.title}
	    		tabIndex="0"
    			className="profile-button">
    			<ProfileImage 
    				width={this.props.width || "40px"} 
    				height={this.props.height || "40px"} 
    				alt={this.props.alt} 
    				src={this.props.src} />
    		</button>
    	);
  	}
}