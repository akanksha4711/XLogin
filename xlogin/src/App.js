import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const username = 'username';
  const password = 'password';
  const [invalid, setInvalid] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  if (loggedIn){
    return (
      <div className='App'>
        <h1>Login Page</h1>
        <div>Welcome, User!</div>
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Login Page</h1>
      {invalid && <p>Invalid username or password</p>}
      <form onSubmit={(e) => {
        e.preventDefault();
        if(password !== e.target.password.value){
          setInvalid(true);
        }
        if(username !== e.target.username.value){
          setInvalid(true);
        }
        if(password === e.target.password.value && username === e.target.username.value){
          setLoggedIn(true);
        }
      }}>
        <label name="username">Username: </label>
        <input name="username" type="text"/>
        <br/>
        <label name="password">Password: </label>
        <input name="password" type="password"/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
