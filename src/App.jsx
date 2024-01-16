import React, { Component, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css';
import AuthProvider from './views/auth/AuthProvider';
import Login from './views/auth/Login';
import LazyLoading from './views/defaults/LazyLoading';
import MessageLoading from './views/defaults/MessageLoading';
import { Settings as ThemeSettings } from './utils/theme';

const LazyChatWindow = lazy(() => import('./views/chat/ChatWindow'));


class App extends Component {
  componentDidMount() {
    new ThemeSettings();
  }
  render() {
    return (
      <AuthProvider>
      <div className="app">
        <div className="app-wrapper">
          <Routes>
            <Route path='/' element={<LazyLoading />} />
            <Route path='/app' element={
              <Suspense fallback={<MessageLoading />} >
                <LazyChatWindow />
              </Suspense>} />
            <Route path='/auth' element={<Login />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </div>
      </div>
      </AuthProvider>
    );
  }
}


export default App;