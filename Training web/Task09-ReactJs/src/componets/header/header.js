import Nav from "./nav";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../images/logo.svg";

const header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <label className="header__label" for="toggle">
        <GiHamburgerMenu />
      </label>
      <input type="checkbox" id="toggle" />
      <Nav />
    </header>
  );
};

export default header;
