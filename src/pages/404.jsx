import { Link } from "react-router-dom";

import HelmetDecorator from '../HelmetDecorator';

const NotFound = () => {
  return ( 
  <div> 

    <HelmetDecorator title="strona 404" description="strona 404 desciption" imageUrl="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/01/legiao_4azFZjioyIlY.png.jpeg" imageAlt="not fount page image"/>

    <h1>404 page</h1>

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
 
export default NotFound;