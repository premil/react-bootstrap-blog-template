import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Home from './pages/Home';
import NewAccount from './pages/NewAccount';
import SignIN from './components/account/SignIN';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/NewAccount">
          <NewAccount/>
        {/* </Route>
        <Route path="/SignIn">
          <SignIN/> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
