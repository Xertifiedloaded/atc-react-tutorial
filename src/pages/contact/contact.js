import classes from "./contact.module.css";
import ContactBox from "../../components/contactBox/contactBox";

const Contact = () => {
  return (
    <div className={classes.main}>
      <ContactBox />
    </div>
  );
};

export default Contact;
