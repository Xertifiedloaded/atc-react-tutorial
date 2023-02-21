import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../layout/mainLayout/mainLayout";
import classes from "./formBox.module.css";

const FormBox = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  let isValid;
  const handleBlur = () => {
    if (!isValid) setError(true);
    else setError(false);
  };

  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(payload);
  };

  return (
    <form className={classes.form}>
      <h3>Leave us a message</h3>
      <div className={classes.inputs}>
        <label>
          <input
            type="text"
            name="name"
            isValid={payload.name.length > 3}
            value={payload.name}
            onBlur={handleBlur}
            placeholder="Name"
            onChange={handleChange}
          />
         {error && <span>Name must be atleast 3 letters</span>}
        </label>
        <label>
          <input
            name="email"
            value={payload.email}
            isValid={payload.name.length > 3}
            onBlur={handleBlur}
            type="text"
            placeholder="Email Address"
            onChange={handleChange}
          />
          {/* <span>Name must be atleast 3 letters</span> */}
        </label>
        <label>
          <textarea
            name="message"
            value={payload.message}
            isValid={payload.name.length > 3}
            placeholder="Your Messages"
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {/* <span>Name must be atleast 3 letters</span> */}
        </label>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </form>
  );
};

export default FormBox;
