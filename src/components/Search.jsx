import React, { Component } from 'react';

import './search.css';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	handleFocus() {
		this.setState((prevState) => ({
			isActive: true,
		}));
	}

	handleBlur(event) {
		if (!event.target.value) {
			this.setState((prevState) => ({
				isActive: false,
			}));
		}
	}

	handleKeyDown(event) {
		if (event.keyCode === 27) {			
			event.target.blur();
		}
	}

	render() {
		return (
			<div className="search-container" aria-selected={this.state.isActive}>
				<span className="button-holder">
					<button type="button" title="search button" tabIndex="-1">
						<i className="ico-search"></i>
						<i className="ico-back-arrow"></i>
					</button>
				</span>
				<input
					onFocus={this.handleFocus.bind(this)} 
					onBlur={this.handleBlur.bind(this)}
					onKeyDown={this.handleKeyDown.bind(this)}
					className="form-search" 
					id="search-input" 
					type="search" 
					name="input" 
					placeholder={this.props.placeholder || "Search text"} 
					autoComplete="off" />
			</div>
		);
	}
}

export default Search;