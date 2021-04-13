import { useParams } from "react-router-dom";
import HelmetDecorator from "../HelmetDecorator";
import Nav from "../nav/nav";

function Product() {
  let { id } = useParams();
  return (
    <div className="App">
      <h1>{`Product ${id} page`}</h1>

      <HelmetDecorator
        title={`produkt nr: ${id}`}
        description={`opis produktu nr: ${id}`}
        imageUrl="https://sm.ign.com/ign_pl/screenshot/default/attack-on-titan-review1-1024x576_qh1d.jpg"
        imageAlt="home image"
      />

      <Nav />
    </div>
  );
}

export default Product;
