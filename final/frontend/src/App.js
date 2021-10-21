import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AddNewProduct from './pages/AddNewProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ LoginPage } exact />
        <Route path="/create-account" component={ SignupPage }  exact/>
        <Route path="/home" component={ HomePage }  exact/>
        <Route path="/products" component={ ProductsPage }  exact/>
        <Route path="/products/add" component={ AddNewProduct }  exact/>
        <Route path="/products/edit/:id" component={ EditProduct }  exact/>
        
        


        
        
        
        
      </Switch>
    </Router>
  );
}

export default App;
