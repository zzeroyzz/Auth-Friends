import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import NewFriendForm from "./components/NewFriendForm"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsPage from './components/FriendsPage';

function App() {
  const logout = () =>{
    localStorage.removeItem('token')
  }

  return (
    
    <Router>
    <div className="App">
      <header className="App-header">
       
      
     <div className ="nav">
      <Link to="/login">Login</Link>
      <Link onClick={logout}>Logout</Link>
      <Link to="/friendslist">Friends</Link>
       </div>
       <h1>Pancakes & Friends</h1>
       </header>
      <Switch>
        <PrivateRoute exact path="/friendslist" component={FriendsPage} />
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
