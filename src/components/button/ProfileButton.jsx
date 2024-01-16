import React, { Component } from 'react';

import './button.css';
import ProfileImage from '../ProfileImage';

class ProfileButton extends Component {

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

export default ProfileButton;