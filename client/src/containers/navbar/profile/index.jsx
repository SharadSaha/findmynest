import { useState } from "react";
import FMNAvatar from "../../../components/generic/avatar";
import FMNDropdown from "../../../components/generic/dropdown";
import { useLogoutUserMutation } from "../../../services/login";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authFormSelectors } from "../../../store/slices/auth-form";

const Profile = () => {
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();

  const store = {
    loginUser: useSelector(authFormSelectors.loginUser),
  };

  const menuItems = [
    {
      value: "Profile",
      text: "profile",
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      value: "Login/Signup",
      text: "login/signup",
      onClick: () => {
        navigate("/auth");
      },
      isDisabled: store.loginUser,
    },
    {
      value: "Logout",
      text: "logout",
      onClick: () => {
        logoutUser()
          .unwrap()
          .then(() => {
            localStorage.removeItem("token");
            sessionStorage.removeItem("user");
            navigate("/auth");
          });
      },
      isDisabled: !store.loginUser,
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const isProfileDisabled = window.location.pathname === "/auth";

  return (
    <div
      className={`cursor-pointer ${
        isProfileDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <FMNAvatar onClick={(e) => setAnchorEl(e.currentTarget)} />
      <FMNDropdown
        disabled={isProfileDisabled}
        anchorEl={anchorEl}
        label="Profile"
        items={menuItems}
        handleClose={() => setAnchorEl(null)}
      />
    </div>
  );
};

export default Profile;
