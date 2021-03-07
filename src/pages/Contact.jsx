import { Link } from "react-router-dom";

import HelmetDecorator from '../HelmetDecorator';

const Contact = () => {
  return ( 
  <div> 

    <HelmetDecorator title="to jest strona Contect" description="Meta Description strony Contact" imageUrl="https://pananimacja.pl/wp-content/uploads/2020/05/attack-on-titan-sezon-4.jpg" imageAlt="contact image"/>

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