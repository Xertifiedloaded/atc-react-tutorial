import classes from "./phone.module.css";
import Iphone from "../../asset/images/iphone.png";
import Arrow from "../../asset/images/circle-arrow.svg";
import { Link } from "react-router-dom";

const Phone = () => {
  return (
    <div className={classes.main}>
      <div className={classes.phone}>
        <img src={Arrow} className={classes.circle} alt="arrow" />
        <img src={Iphone} alt="phone" />
      </div>
      <div className={classes.phoneContent}>
        <h3>Measure Impressions and Reach Post</h3>
        <p>
          Graphs displaying your performance for metrics like follower
          evolution, average engagement rate per post and reach and impressions
          to give you the insights.
        </p>
        <Link>Learn about graphs &#8594;</Link>
      </div>
    </div>
  );
};

export default Phone;
