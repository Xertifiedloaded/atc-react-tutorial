import classes from "./contact.module.css";
import ContactBox from "../../components/contactBox/contactBox";
import BoxBlue from "../../asset/images/box-blue.png";
import BoxYellow from "../../asset/images/box-yellow.svg";

const Contact = () => {
  return (
    <div className={classes.main}>
      <ContactBox />
      <img src={BoxBlue} alt="icon" className={classes.blue} />
      <img src={BoxYellow} alt="icon" className={classes.yellow} />
    </div>
  );
};

export default Contact;
