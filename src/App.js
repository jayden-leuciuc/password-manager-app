import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import Navbar from './compnents/Navbar';

function App() {
  return (

    <Router>
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
    </Router>
  );
}

export default App;
