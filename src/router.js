import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/mainLayout/mainLayout";
import Contact from "./pages/contact/contact";
import Landing from "./pages/landing/landing";
import User from "./pages/user/user";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/users",
          element: <User />,
        },
      ],
    },
  ]);
};

export default Routes;
