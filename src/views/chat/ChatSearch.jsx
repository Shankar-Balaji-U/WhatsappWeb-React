import React, { Component } from 'react';
import './chat.css';

import Search from '../../components/Search';
import RoundButton from '../../components/button/RoundButton';


class ChatSearch extends Component {
  render() {
    return (
      <div className="chat-search">
      	<Search placeholder="Search or start new chat" />
        <RoundButton className="filter-button" aria-selected="false" title="filter button">
          <i className="ico-filter"></i>
        </RoundButton>
      </div>
    );
  }
}

export default ChatSearch;