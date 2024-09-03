import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
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
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
