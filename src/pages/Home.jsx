import { Link } from "react-router-dom";

import HelmetDecorator from '../HelmetDecorator';

function App() {
  return (
    <div className="App">
      <h1>Home page</h1>

      <HelmetDecorator title="to jest strona glówna" description="to jest meta desciption strony głównej"/>

      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">about</Link>
      <br/>
      <Link to="/contact">contact</Link>
       
    </div>
  );
}

export default App;
