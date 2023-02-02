// import classes from "./landing.module.css";
import Hero from "../../components/hero/hero";
import Partner from "../../components/partner/partner";
import Phone from "../../components/phone/phone";
import Schedule from "../../components/schedule/schedule";
import Track from "../../components/track/track";
import Customer from "../../components/customer/customer";
import Trial from "../../components/trial/trial";

const Landing = () => {
  return (
    <>
      <Hero />
      <Partner />
      <Phone />
      <Schedule />
      <Track />
      <Customer />
      <Trial />
    </>
  );
};

export default Landing;
