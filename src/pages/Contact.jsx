import Nav from "../nav/nav";
import HelmetDecorator from "../HelmetDecorator";

const Contact = () => {
  return (
    <div>
      <HelmetDecorator
        title="to jest strona Contect"
        description="Meta Description strony Contact"
        imageUrl="https://pananimacja.pl/wp-content/uploads/2020/05/attack-on-titan-sezon-4.jpg"
        imageAlt="contact image"
      />

      <h1>Contact page</h1>

      <Nav />
    </div>
  );
};

export default Contact;
