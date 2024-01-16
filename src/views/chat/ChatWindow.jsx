import React, { Component } from 'react';
import './chat.css';

import ChatContainer from './ChatContainer';
import MessageContainer from './MessageContainer';

class ChatWindow extends Component {
  render() {
    return (
      <div className="chat-window two">
        <ChatContainer />
        <MessageContainer />
      </div>
    );
  }
}

export default ChatWindow;
