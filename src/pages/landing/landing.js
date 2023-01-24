import classes from "./landing.module.css";
import MainLayout from "../../layout/mainLayout/mainLayout";
import Hero from "../../components/hero/hero";
import Partner from "../../components/partner/partner";
import Phone from "../../components/phone/phone";

const Landing = () => {
  return (
    <>
      <Hero />
      <Partner />
      <Phone />
    </>
  );
};

export default Landing;
