import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./user.module.css";

const User = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://dummyjson.com/users",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(users);

  useEffect(() => {
    getUsers();
  });

  return (
    <div className={classes.main}>
      <UserCard />
    </div>
  );
};

export default User;

const UserCard = () => {
  return (
    <div className={classes.card}>
      <h3>Olaitan Sodiq</h3>
      <a href="mailto:olaitan@gmail.com" className={classes.email}>
        olaitan@gmail.com
      </a>
      <Link className={classes.view}>View More Info</Link>
    </div>
  );
};
