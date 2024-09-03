import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Rentals from "../Pages/Rentals/Rentals";
import ServicePage from "../Pages/ServicePage/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/rentals",
        element: <Rentals />,
      },
    ],
  },
]);

export default router;
