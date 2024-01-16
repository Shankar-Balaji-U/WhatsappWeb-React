import React, { Component } from 'react';

import './header.css';

class Header extends Component {
	render() {
    	return (
    		<header className={this.props.className}>
    			{this.props.children}
    		</header>
    	);
  	}
}

export default Header;