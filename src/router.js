import { useRoutes } from "react-router-dom";
import MainLayout from "./layout/mainLayout/mainLayout";
import Contact from "./pages/contact/contact";
import Landing from "./pages/landing/landing";

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
      ],
    },
  ]);
};

export default Routes;
