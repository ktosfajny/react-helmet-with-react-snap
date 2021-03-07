import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/404';

const Router = () => {
  return (  
    <>
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound}/>
        <NotFound/>
      </Switch>
    </BrowserRouter>
    </>
  );
}
 
export default Router;