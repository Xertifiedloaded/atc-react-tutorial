import Address from "./address/address";
import classes from "./contactBox.module.css";
import FormBox from "./formBox/formBox";
import Rectangle from "../../asset/images/rectangle.svg";
import { useEffect, useState } from "react";

const ContactBox = () => {
  return (
    <div className={classes.main}>
      <h3>Get In Touch</h3>
      <div className={classes.info}>
        <FormBox />
        <Address />
      </div>
      <img src={Rectangle} alt="icon" className={classes.topRec} />
      <img src={Rectangle} alt="icon" className={classes.bottomRec} />
    </div>
  );
};

export default ContactBox;
