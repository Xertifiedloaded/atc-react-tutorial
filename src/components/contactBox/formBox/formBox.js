import { useState } from "react";
import classes from "./formBox.module.css";

const FormBox = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  // let isValid = payload.name.length > 3;

  // const handleBlur = () => {};

  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      payload.name.length < 3 ||
      payload.email.length < 3 ||
      payload.message.length < 3
    ) {
      setError(true);
    } else setError(false);
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
            value={payload.name}
            placeholder="Name"
            onChange={handleChange}
            // onBlur={handleBlur}
            required
          />
          {/* {error && <span>Name must be atleast 3 letters</span>} */}
        </label>
        <label>
          <input
            name="email"
            value={payload.email}
            required
            type="text"
            placeholder="Email Address"
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* {error && <span>Name must be atleast 3 letters</span>} */}
        </label>
        <label>
          <textarea
            name="message"
            value={payload.message}
            placeholder="Your Messages"
            onChange={handleChange}
            // onBlur={handleBlur}
          ></textarea>
          {/* {error && <span>Name must be atleast 3 letters</span>} */}
        </label>
        <button onClick={handleSubmit}>Send</button>
        {error && <span>fields must be greater than 3 letters</span>}
      </div>
    </form>
  );
};

export default FormBox;
