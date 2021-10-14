import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from 'react-router-dom'; 
import MoviesPage from './pages/MoviesPage';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (



    <Router>
      <Switch>
        <Route path="/" component={ MoviesPage }  exact />
        <Route path="/home" component={ MoviesPage }  exact />
        <Route path="/home/movie/:id" component={ MovieDetails }  exact />
      
        
      </Switch>
    </Router>
  );
}

export default App;
