import classes from "./trackCard.module.css";

const TrackCard = ({ image, title, text, backgroundImage }) => {
  return (
    <div className={classes.main}>
      <div
        className={classes.cardImg}
        style={{ backgroundImage: backgroundImage }}
      >
        <img src={image} alt="icons" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default TrackCard;
