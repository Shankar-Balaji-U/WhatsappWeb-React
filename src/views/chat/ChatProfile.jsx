import React, { Component } from 'react';
import './chat.css';

import Header from '../../components/Header';
import RoundButton from '../../components/button/RoundButton';
import ProfileButton from '../../components/button/ProfileButton';

import defaultUserAvatar from '../../static/image/default-user-avatar.svg';
// import defaultGroupAvatar from '../../static/image/default-group-avatar.svg';


class ChatProfile extends Component {
  render() {
    return (
      <Header className="nav-bar">
        <ProfileButton title="Profile setting button" alt="Shankar Balaji Profile" src={defaultUserAvatar} />
        <div className="feature-buttons">
          <RoundButton title="Search messages">
            <i className="ico-search"></i>
          </RoundButton>
          <RoundButton title="Chat options">
            <i className="ico-option"></i>
          </RoundButton>
        </div>
      </Header>

      // <header className="">
      //   <div>
      //     <img />
      //   </div>
      //   <div>
      //   </div>
      // </header>
    );
  }
}

export default ChatProfile;