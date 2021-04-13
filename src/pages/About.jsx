import Nav from "../nav/nav";
import HelmetDecorator from "../HelmetDecorator";

const About = () => {
  return (
    <div>
      <HelmetDecorator
        title="strona About Us"
        description="To jest strona About Us - description"
        imageUrl="https://lordsofgaming.net/wp-content/uploads/2020/12/attack-on-titan-season-4-2.jpg"
        imageAlt="about image"
      />

      <h1>About page</h1>

      <Nav />
    </div>
  );
};

export default About;
