import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/footer/footer";
import Header from "../../components/ui/header/header";
import classes from "./mainLayout.module.css";

const MainLayout = ({ Children }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
