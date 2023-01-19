import { Link } from "react-router-dom";
import classes from "./footer.module.css";
import Logo from "../../../asset/images/logo.svg";
import Google from "../../../asset/images/google.svg";
import Twitter from "../../../asset/images/twitter.svg";
import Instagram from "../../../asset/images/instagram.svg";
import Linked from "../../../asset/images/linkedIn.svg";
import Heart from "../../../asset/images/Heart.svg";

const Footer = () => {
  return (
    <div className={classes.main}>
      <footer>
        <div className={classes.head}>
          <h3>
            <Link>
              <img src={Logo} alt="" />
            </Link>
          </h3>
          <p>Build a modern and creative <br /> website with crealand</p>
          <div className={classes.socials}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Google} alt="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Twitter} alt="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Linked} alt="" />
            </a>
          </div>
        </div>
        <div className={classes.head}>
          <h3>Product</h3>
          <a href="#">Landingpage</a>
          <a href="#">Pictures</a>
          <a href="#">Documentation</a>
          <a href="#">Referral Program</a>
          <a href="#">Pricing</a>
        </div>
        <div className={classes.head}>
          <h3>Product</h3>
          <a href="#">Landingpage</a>
          <a href="#">Pictures</a>
          <a href="#">Documentation</a>
          <a href="#">Referral Program</a>
          <a href="#">Pricing</a>
        </div>
        <div className={classes.head}>
          <h3>Product</h3>
          <a href="#">Landingpage</a>
          <a href="#">Pictures</a>
          <a href="#">Documentation</a>
          <a href="#">Referral Program</a>
          <a href="#">Pricing</a>
        </div>
        <div className={classes.head}>
          <h3>Product</h3>
          <a href="#">Landingpage</a>
          <a href="#">Pictures</a>
          <a href="#">Documentation</a>
          <a href="#">Referral Program</a>
          <a href="#">Pricing</a>
        </div>
      </footer>
      <div className={classes.copyright}>
        <img src={Heart} alt="heart" />
        <p>Copyright © 2021. Crafted with love.</p>
      </div>
    </div>
  );
};

export default Footer;
