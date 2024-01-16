import React, { Component } from 'react';
import './chat.css';

import defaultUserAvatar from '../../static/image/default-user-avatar.svg';

import Badge from '../../components/Badge';
import ProfileImage from '../../components/ProfileImage';

class ChatListItem extends Component {

  render() {
    const isNewMessage = false;
    return (
      <li className="chat-list-item" data-newchat={isNewMessage}>
        <div className="chat-list-item-container" aria-selected="false">
        	<div className="avatar">
        		<ProfileImage width="48px" height="48px" src={defaultUserAvatar} />
        	</div>
        	<div className="content">
            <div>
  	        	<span className="profile-title">Shankar Balaji MCA</span>
              <div className="last-message-datetime">12:23 pm</div>
            </div>
            <div>
              <span className="last-message">Hi</span>
              <span className="chat-user-option">
                { isNewMessage ? <Badge aria-label="unread count" context="3" /> : null }
              </span>
            </div>
        	</div>
        </div>
      </li>
    );
  }
}

export default ChatListItem;