import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/footer/footer";
import Header from "../../components/ui/header/header";
import classes from "./mainLayout.module.css";

export const UserContext = createContext();
const MainLayout = () => {
  // const [user, setUser] = useState("Olaitan");
  // const [count, setCount] = useState(0);

  // const handleCount = () => {
  //   e.preventDefault();
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // };

  // useEffect(() => {
  //   handleCount();
  // });

  return (
    <>
      {/* <UserContext.Provider value={{ user, count }}> */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* </UserContext.Provider> */}
    </>
  );
};

export default MainLayout;
