import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

function App() {
  return (
     <Router>
       <Route path="/" component={ HomePage } exact />
       <Route path="/home" component={ HomePage }  exact/>
       <Route path="/login" component={ LoginPage } exact />
       
     </Router>
  );
}

export default App;
