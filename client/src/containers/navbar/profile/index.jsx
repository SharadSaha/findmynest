import { useState } from "react";
import FMNAvatar from "../../../components/generic/avatar";
import FMNDropdown from "../../../components/generic/dropdown";

const Profile = () => {
  const menuItems = [
    {
      value: "Profile",
      text: "profile",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div className="cursor-pointer">
      <FMNAvatar onClick={(e) => setAnchorEl(e.currentTarget)} />
      <FMNDropdown
        anchorEl={anchorEl}
        label="Profile"
        items={menuItems}
        handleClose={() => setAnchorEl(null)}
      />
    </div>
  );
};

export default Profile;
