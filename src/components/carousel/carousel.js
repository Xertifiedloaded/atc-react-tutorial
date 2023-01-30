import classes from "./carousel.module.css";
import { ReactComponent as Star } from "../../asset/images/star.svg";
import Quote from "../../asset/images/quote.svg";

const Carousel = ({ review, title, position, image }) => {
  return (
    <div className={classes.main}>
      <img src={Quote} alt="quote" />
      <div className={classes.review}>
        <div className={classes.star}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p>“{review}”</p>
        <div className={classes.face}>
          <img src={image} alt="customer" />
          <div>
            <h4>{title}</h4>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
