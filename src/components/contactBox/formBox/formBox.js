import { useState } from "react";
import classes from "./formBox.module.css";

const FormBox = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const changeColor = (e) => {
    e.preventDefault();
    setCar((car) => ({
      ...car,
      color: "blue",
    }));
  };
  // const color = "yusuf"
  // setColor = "my name is olaitan"

  return (
    <form className={classes.form}>
      <h3>
        It is a {car.color} {car.model} from {car.year}
      </h3>
      <button onClick={changeColor}>Change Color</button>

      {/* <h3>Leave us a message</h3> */}
      <div className={classes.inputs}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email Address" />
        <textarea placeholder="Your Messages"></textarea>
        <button>Send</button>
      </div>
    </form>
  );
};

export default FormBox;
