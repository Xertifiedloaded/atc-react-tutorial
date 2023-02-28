import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/mainLayout/mainLayout";
import Contact from "./pages/contact/contact";
import Landing from "./pages/landing/landing";
import Profile from "./pages/profile/profile";
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
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);
};

export default Routes;
