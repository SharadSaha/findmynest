import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authFormActions } from "../../store/slices/auth-form";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      dispatch(authFormActions.setUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

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
