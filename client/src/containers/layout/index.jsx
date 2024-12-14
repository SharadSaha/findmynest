import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
