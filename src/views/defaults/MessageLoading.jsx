import React, { Component, useTransition } from 'react';

import Loading from './Loading';
import { Button } from '../../components/buttons';

class MessageLoading extends Component {

  render() {
    return (
      <Loading title="Loading your chats" iconElement={<div className="whatsapp-web-icon"></div>}>
        <Button className="button info">
          Logout
        </Button>
      </Loading>
    );
  }
}

export default MessageLoading;