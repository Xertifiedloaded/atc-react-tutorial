import classes from "./profile.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const { id } = useParams();
  console.log(id);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "GET",
        url: `https://dummyjson.com/users/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.main}>
          <div className={classes.profile}>
            <div className={classes.picture}>
              <img src={`${user.image}`} alt="photo" />
            </div>
            <div className={classes.info}>
              <h2>{`${user.firstName}` + " " + `${user.lastName}`}</h2>
              <label>{user.company?.title}</label>
              <address>45 aderupoko drivve ibare housing estate</address>
              <p>+4367778990000</p>
              <small>szdxfcgvbh@gmail.com</small>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
