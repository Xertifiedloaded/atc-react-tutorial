import classes from "./trial.module.css";
import Faces from "../../asset/images/faces.svg";
import { Link } from "react-router-dom";

const Trial = () => {
  return (
    <div className={classes.main}>
      <div className={classes.grow}>
        <h3>Grow your brand presence on social media 😍</h3>
        <p>Join with more 1200+ happy customers</p>
        <div className={classes.face}>
          <img src={Faces} alt="images" />
          <span>and others</span>
        </div>
      </div>
      <Link>Get your trial now</Link>
    </div>
  );
};

export default Trial;
