import React, { Component } from 'react';
import './chat.css';

import ChatBox from './ChatBox';
import ChatProfile from './ChatProfile';
import ChatInputBar from './ChatInputBar';


class MessageContainer extends Component {
  render() {
    return (
      <div className="message-container">
        <ChatProfile />
        <ChatBox />
        <ChatInputBar />
      </div>
    );
  }
}

export default MessageContainer;
