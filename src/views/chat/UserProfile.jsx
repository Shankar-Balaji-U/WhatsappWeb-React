import React, { Component } from 'react';
import './chat.css';

import Header from '../../components/Header';
import RoundButton from '../../components/button/RoundButton';
import ProfileButton from '../../components/button/ProfileButton';

import defaultUserAvatar from '../../static/image/default-user-avatar.svg';
// import defaultGroupAvatar from '../../static/image/default-group-avatar.svg';


class UserProfile extends Component {
  render() {
    return (
      <Header className="nav-bar">
        <ProfileButton title="Profile setting button" alt="Shankar Balaji Profile" src={defaultUserAvatar} />
        <div className="feature-buttons">
          <RoundButton title="View status">
            <i className="ico-status"></i>
          </RoundButton>
          <RoundButton title="New chat">
            <i className="ico-new-chat"></i>
          </RoundButton>
          <RoundButton title="User option">
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

export default UserProfile;