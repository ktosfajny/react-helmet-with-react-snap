import { Link } from "react-router-dom";

import HelmetDecorator from '../HelmetDecorator';

const About = () => {
  return ( 
  <div> 

    <HelmetDecorator title="strona About Us" description="To jest strona About Us - description" imageUrl="https://lordsofgaming.net/wp-content/uploads/2020/12/attack-on-titan-season-4-2.jpg" imageAlt="about image"/>

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