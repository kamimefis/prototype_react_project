import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Password from './components/Password'
import Login from './components/Login'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/password" component={Password} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
