import classes from "./formBox.module.css";

const FormBox = () => {
  return (
    <form className={classes.form}>
      <h3>Leave us a message</h3>
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
