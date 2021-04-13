import Nav from "../nav/nav";
import HelmetDecorator from "../HelmetDecorator";
function NonLinkedPageWithHelmet() {
  return (
    <div className="App">
      <HelmetDecorator
        title="nonLinked but with helmet page"
        description="To jest strona niezalinkowana ale z helmet"
        imageUrl="https://lordsofgaming.net/wp-content/uploads/2020/12/attack-on-titan-season-4-2.jpg"
        imageAlt="about image"
      />

      <h1>{`Non linked Page WITH helmet`}</h1>

      <Nav />
    </div>
  );
}

export default NonLinkedPageWithHelmet;
