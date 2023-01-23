import { Link } from "react-router-dom";
import classes from "./hero.module.css";
import Arrow from "../../asset/images/hero-arrow.svg";
import HeroImage from "../../asset/images/hero-bg.png";
import Stroke from "../../asset/images/stroke.svg";

const Hero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.hero}>
        <div className={classes.heroContent}>
          <h1>
            We help you <br /> grow your business{" "}
            <span>
              faster <img src={Stroke} alt="stroke" />
            </span>
          </h1>
          <p>
            Ehya is the Instagram analytics platform teams use to stay focused
            on the goals, track engagement for report your business .
          </p>
          <div className={classes.links}>
            <Link to="/contact">
              <button>See how it works</button>
            </Link>
            <Link>
              <button>
                Get a free demo <img src={Arrow} alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
        <div className={classes.heroImage}>
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
