import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../navbar";
import { useSelector } from "react-redux";

const Layout = () => {
  return (
    <div className="h-full">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

const RequireAuth = () => {
  const store = {
    user: useSelector((state) => state.authForm.user),
  };
  return store.user ? <Layout /> : <Navigate to="/auth" />;
};

export { Layout, RequireAuth };
