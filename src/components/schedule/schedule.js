import classes from "./schedule.module.css";
import Mark from "../../asset/images/check.svg";
import Mac from "../../asset/images/Macbook.png";
import { Link } from "react-router-dom";

const list = [
  {
    image: Mark,
    text: "Best Time to Post",
  },
  {
    image: Mark,
    text: "Geolocation",
  },
  {
    image: Mark,
    text: "User Tag",
  },
  {
    image: Mark,
    text: "Others benefit",
  },
];
const Schedule = () => {
  return (
    <div className={classes.main}>
      <div className={classes.scheduleContent}>
        <h3>Schedule Your Post Whenever You Want</h3>
        <p>
          Publish your content automatically to ensure that your content reaches
          the right people. Built-in features such as
        </p>
        <div>
          {list.map((item, i) => (
            <li key={i}>
              <img src={item.image} alt="mark" /> {item.text}
            </li>
          ))}
        </div>
        <Link>Learn about scheduled post &#8594;</Link>
      </div>
      <div className={classes.mac}>
        <img src={Mac} alt="" />
      </div>
    </div>
  );
};

export default Schedule;
