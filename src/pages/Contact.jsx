import { Link } from "react-router-dom";

import HelmetDecorator from '../HelmetDecorator';

const Contact = () => {
  return ( 
  <div> 

    <HelmetDecorator title="to jest strona Contect" description="Meta Description strony Contact"/>

    <h1>Contact page</h1>

    <div>
      <Link to="/">Home</Link>
        <br/>
      <Link to="/about">about</Link>
        <br/>
      <Link to="/contact">contact</Link>
    </div>

  </div> 
  );
}
 
export default Contact;