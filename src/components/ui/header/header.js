import classes from "./header.module.css";
import Arrow from "../../../asset/images/angle-down.svg";
import Logo from "../../../asset/images/logo.svg";
import LogoBlack from "../../../asset/images/logo-black.svg";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div
      className={`${classes.main} ${
        location.pathname === "/contact" && classes.back
      }`}
    >
      <header>
        <NavLink to="/">
          <img
            src={location.pathname === "/contact" ? LogoBlack : Logo}
            alt="logo"
          />
        </NavLink>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? classes.active
                  : "" || location.pathname === "/contact"
                  ? classes.links
                  : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="landing"
            className={({ isActive }) =>
              `${
                isActive
                  ? classes.active
                  : "" || location.pathname === "/contact"
                  ? classes.links
                  : ""
              }`
            }
          >
            Landing <img src={Arrow} alt="arrow" />
          </NavLink>
          <NavLink
            className={location.pathname === "/contact" && classes.links}
          >
            Pages <img src={Arrow} alt="arrow" />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Docs
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${
                isActive
                  ? classes.active
                  : "" || location.pathname === "/contact"
                  ? classes.links
                  : ""
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            className={location.pathname === "/contact" && classes.links}
          >
            Login
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
