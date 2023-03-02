import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./user.module.css";
import Loader from "../../asset/images/loader.gif";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "GET",
        url: "https://dummyjson.com/users",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data.users);
      setUsers(res.data.users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <div className={classes.loader}>
          <img src={Loader} alt="loader" />
        </div>
      ) : (
        <div className={classes.main}>
          {users.map((item, i) => (
            <UserCard users={users} {...item} key={i} index={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default User;

const UserCard = ({ users, index }) => {
  return (
    <div className={classes.card}>
      <h3>
        {`${users[index]?.firstName}` + " " + `${users[index]?.lastName}`}
      </h3>
      <a href={`mailto:${users[index]?.email}`} className={classes.email}>
        {users[index]?.email}
      </a>
      <Link to={`/profile/${users[index]?.id}`} className={classes.view}>
        View More Info
      </Link>
    </div>
  );
};
