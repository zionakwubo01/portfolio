import { Outlet } from "react-router-dom";
import Header from "../bloc/Header";
import Foter from "../bloc/Foter";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Foter />
    </div>
  );
};

export default Layout;
