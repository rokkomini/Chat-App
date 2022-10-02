import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom'
import LoginUserPage from './pages/LoginUserPage';
import CreateUserPage from './pages/CreateUserPage';
import ChatRoomPage from './pages/ChatRoomPage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartPage/>}/>
        <Route path='/login-user' element={<LoginUserPage/>}/>
        <Route path='/create-user' element={<CreateUserPage />}/>
        <Route path='/chatroom' element={<ChatRoomPage />}/>
      </Routes>
    </div>
  );
}

export default App;
