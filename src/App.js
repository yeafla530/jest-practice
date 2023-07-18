import React from 'react';
import Profile from './Profile';
import JoinButton from './JoinButton';
import UserList from './UserList';
import Login from './Login';
import TodoList from './components/TodoList';

function App() {
  return(
    <div className="App">
      {/* <Profile />
      <JoinButton age={23}/>
      <UserList users={["Tom", "Mike", "Lily"]}/> */}
      {/* <Login /> */}
      <TodoList/>
    </div>
  )
}

export default App