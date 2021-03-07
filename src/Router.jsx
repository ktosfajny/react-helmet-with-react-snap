import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const Router = () => {
  return (  
    <>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />

      </Switch>
    </BrowserRouter>
    </>
  );
}
 
export default Router;