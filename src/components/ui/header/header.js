import classes from "./header.module.css";
import Arrow from "../../../asset/images/angle-down.svg";
import Logo from "../../../asset/images/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.main}>
      <header>
        <NavLink>
          <img src={Logo} alt="logo" />
        </NavLink>
        <nav>
          <NavLink>Home</NavLink>
          <NavLink>
            Landing <img src={Arrow} alt="arrow" />
          </NavLink>
          <NavLink>
            Pages <img src={Arrow} alt="arrow" />
          </NavLink>
          <NavLink>Docs</NavLink>
          <NavLink>Help</NavLink>
          <NavLink>Login</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
