import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import Navbar from './compnents/Navbar';
import Footer from './compnents/pages/Footer/Footer';
import Home from './compnents/pages/HomePage/Home'
import Products from './compnents/pages/Products/Products'
import SignUp from './compnents/pages/SignUp/SignUp'

function App() {
  return (

    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/sign-up' exact component={SignUp}/>
        </Switch>
        <Footer />
    </Router>
  );
}
export default App;
