import classes from "./address.module.css";
import Location from "../../../asset/images/location.svg";
import Call from "../../../asset/images/call.svg";
import Message from "../../../asset/images/message.svg";
import Fb from "../../../asset/images/fb.svg";
import Tw from "../../../asset/images/tw.svg";
import Ig from "../../../asset/images/ig.svg";
import Youtube from "../../../asset/images/youtube.svg";

const Address = () => {
  return (
    <div className={classes.main}>
      <div className={classes.location}>
        <p>
          <img src={Location} alt="icon" />
          Infomation technologies building, Victoria Island, Lagos, Nigeria.
        </p>
        <p>
          <img src={Call} alt="icon" />
          +234 081-1236-4568
        </p>
        <p>
          <img src={Message} alt="icon" />
          hello@info.com.ng
        </p>
        <div className={classes.socials}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Ig} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Fb} alt="" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={Tw} alt="" />
          </a>
        </div>
      </div>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.855217964734!2d3.3765232147959976!3d7.142735494842391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4b08f0170e29%3A0x7acce266df150aff!2sAFRICA%20TRAINOVATION%20CONSULTING.%20(ATC%20Hub)!5e0!3m2!1sen!2sng!4v1676371924495!5m2!1sen!2sng"
          width="100%"
          height="155"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Address;
