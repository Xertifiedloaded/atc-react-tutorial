import Footer from "../../components/ui/footer/footer";
import Header from "../../components/ui/header/header";
import classes from "./mainLayout.module.css";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
