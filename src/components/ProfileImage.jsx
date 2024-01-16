import React, { Component } from 'react';

import './profile-image.css';

class ProfileImage extends Component {

	render() {
    	return (
    		<div className="avatar-container" style={{width: this.props.width, height: this.props.height}}>
				<img src={this.props.src} alt={this.props.alt} />
    		</div>
    	);
  	}
}

export default ProfileImage;