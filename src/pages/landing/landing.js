// import classes from "./landing.module.css";
import MainLayout from "../../layout/mainLayout/mainLayout";
import Hero from "../../components/hero/hero";
import Partner from "../../components/partner/partner";
import Phone from "../../components/phone/phone";
import Schedule from "../../components/schedule/schedule";
import Track from "../../components/track/track";
import Customer from "../../components/customer/customer";

const Landing = () => {
  return (
    <>
      <Hero />
      <Partner />
      <Phone />
      <Schedule />
      <Track />
      <Customer />
    </>
  );
};

export default Landing;
