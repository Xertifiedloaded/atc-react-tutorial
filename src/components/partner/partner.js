import classes from "./partner.module.css";
import Slack from "../../asset/images/slack.svg";
import Google from "../../asset/images/google.svg";
import Netflix from "../../asset/images/netflix.svg";
import Bnb from "../../asset/images/airbnb.svg";
import Uber from "../../asset/images/uber.svg";

const Partner = () => {
  return (
    <div className={classes.main}>
      <img src={Slack} alt="images" />
      <img src={Netflix} alt="images" />
      <img src={Google} alt="images" />
      <img src={Bnb} alt="images" />
      <img src={Uber} alt="images" />
    </div>
  );
};

export default Partner;
