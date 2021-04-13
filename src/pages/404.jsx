import Nav from "../nav/nav";
import HelmetDecorator from "../HelmetDecorator";

const NotFound = () => {
  return (
    <div>
      <HelmetDecorator
        title="strona 404"
        description="strona 404 desciption"
        imageUrl="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/01/legiao_4azFZjioyIlY.png.jpeg"
        imageAlt="not fount page image"
      />

      <h1>404 page</h1>

      <Nav />
    </div>
  );
};

export default NotFound;
