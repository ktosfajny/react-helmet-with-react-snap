import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Product from "./pages/Product";
import PageWithoutHelmet from "./pages/PageWithoutHelmet";
import NonLinkedPageWithoutHelmet from "./pages/NonLinkedPageWithoutHelmet";
import NonLinkedPageWithHelmet from "./pages/NonLinkedPageWithHelmet";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/product/:id" exact component={Product} />
          <Route
            path="/LinkedPageWithoutHelmet"
            exact
            component={PageWithoutHelmet}
          />
          <Route
            path="/nonLinkedPageWithoutHelmet"
            exact
            component={NonLinkedPageWithoutHelmet}
          />
          <Route
            path="/nonLinkedPageWithHelmet"
            exact
            component={NonLinkedPageWithHelmet}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
