import Address from "./address/address";
import classes from "./contactBox.module.css";
import FormBox from "./formBox/formBox";

const ContactBox = () => {
  return (
    <div className={classes.main}>
      <h3>Get In Touch</h3>
      <div className={classes.info}>
        <FormBox />
        <Address />
      </div>
    </div>
  );
};

export default ContactBox;
