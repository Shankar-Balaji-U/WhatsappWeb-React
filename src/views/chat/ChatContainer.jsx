import React, { Component } from 'react';
import './chat.css';

import AlertNotify from './AlertNotify';
import ChatList from './ChatList';
import UserProfile from './UserProfile';
import ChatSearch from './ChatSearch';

class ChatContainer extends Component {
  render() {
    return (
      <div className="chat-container">
        <UserProfile />
        <ChatSearch />
        <AlertNotify />
        <ChatList />
      </div>
    );
  }
}

export default ChatContainer;