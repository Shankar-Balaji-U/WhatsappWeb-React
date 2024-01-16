import React, { Component } from 'react';
import './chat.css';

import RoundButton from '../../components/button/RoundButton';
import ChatForm from './ChatForm';


class ChatInputBar extends Component {
  render() {
    return (
      <div className="chat-input-container">
        <RoundButton title="User option">
            <i className="ico-option"></i>
        </RoundButton>
        <div className="input-box-container">
          <button>
            <i className="ico-smiley"></i>
          </button>
          <ChatForm />
        </div>
      </div>
    );
  }
}

export default ChatInputBar;