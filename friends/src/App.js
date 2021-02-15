import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import NewFriendForm from "./components/NewFriendForm"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const logout = () =>{
    localStorage.removeItem('token')
  }

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Pancakes & Friends</h1>
      
     <div className ="nav">

    
          <Link to="/login">Login</Link>
       
            <Link onClick={logout}>Logout</Link>
       
        <Link to="/protected">Protected Page</Link>
       </div>
       </header>
      <Switch>
        <PrivateRoute exact path="/protected" component={NewFriendForm} />
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
