import './App.css';
import NotFound from './components/NotFound/NotFound';
import PostDetails from './components/PostDetails/PostDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path={["/", "/home"]} component={Main} />
          <Route path="/post/:postId" component={PostDetails} />
          <Route path="*" component={NotFound} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
