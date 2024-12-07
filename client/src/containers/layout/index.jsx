import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="w-full h-full flex-1 flex flex-col justify-center items-center p-[20px] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
