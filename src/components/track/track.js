import { cardData } from "../../constant";
import classes from "./track.module.css";
import TrackCard from "./trackCard/trackCard";

const Track = () => {
  return (
    <div className={classes.main}>
      <div className={classes.track}>
        <div className={classes.trackContent}>
          <h3>Track any hashtag(s) Performance</h3>
          <p>
            Don’t waste time on search manual tasks. Let Automation do it for
            you. Simplify workflows, reduce errors, and save time.
          </p>
        </div>
        <div className={classes.cards}>
          {cardData.map((item, i) => (
            <TrackCard {...item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Track;
