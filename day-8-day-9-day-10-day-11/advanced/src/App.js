import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticleDetails from './pages/articleDetails';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFound';

function App() {





  return (
    <div className="App">

        <Router>

            <Switch>

              <Route path="/" component={ HomePage } exact />
              <Route path="/home" component={ HomePage } exact /> 

              <Route path="/home/details-article/:id/:title" component={ ArticleDetails } exact /> 



              <Route path="/about" component={ AboutPage } exact />
              <Route path="*" component={ NotFoundPage } exact />
            </Switch>
            
            

        </Router>

    </div>
  );
}

export default App;
