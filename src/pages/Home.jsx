import Nav from "../nav/nav";
import HelmetDecorator from "../HelmetDecorator";

function App() {
  return (
    <div className="App">
      <h1>Home page</h1>

      <HelmetDecorator
        title="to jest strona glówna"
        description="to jest meta desciption strony głównej"
        imageUrl="https://sm.ign.com/ign_pl/screenshot/default/attack-on-titan-review1-1024x576_qh1d.jpg"
        imageAlt="home image"
      />

      <Nav />
    </div>
  );
}

export default App;
