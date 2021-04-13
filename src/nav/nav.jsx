import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">about</Link>
        <br />
        <Link to="/contact">contact</Link>
        <br />
        <Link to="/product/1">produkt 1</Link>
        <br />
        <Link to="/product/2">produkt 2</Link>
        <br />
        <Link to="/LinkedPageWithoutHelmet">
          zalinkowana podstrona z helmet
        </Link>
      </div>
      <p>
        jest jeszcze niezalinkowana strona bez helmet pod url:
        /nonLinkedPageWithoutHelmet
      </p>
      <p>
        jest jeszcze niezalinkowana strona ale z helmet pod url:
        /nonLinkedPageWithHelmet
      </p>
    </div>
  );
};

export default Nav;
