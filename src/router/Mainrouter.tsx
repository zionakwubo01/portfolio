import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homescreen from "../pages/Homescreen";

const Mainrouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homescreen />,
      },
    ],
  },
]);

export default Mainrouter;
