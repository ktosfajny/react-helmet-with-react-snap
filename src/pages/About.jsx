import { Link } from "react-router-dom";

import HelmetDecorator from '../HelmetDecorator';

const About = () => {
  return ( 
  <div> 

    <HelmetDecorator title="strona About Us" description="To jest strona About Us - description"/>

    <h1>About page</h1>

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
 
export default About;