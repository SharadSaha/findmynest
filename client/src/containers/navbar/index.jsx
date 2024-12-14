import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import { nestIcon } from "../../assets/images";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CreateEditNest from "../home/create-nest";

const Navbar = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/about");
  };
  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <nav className="p-4 px-8 bg-white w-full shadow-sm flex">
      <div className="w-full flex justify-between items-center mx-auto">
        <div className="text-lg font-bold flex items-center gap-2">
          <img src={nestIcon} className="max-w-[40px]" />
          findmyNest
        </div>
        <ul className="flex space-x-4 items-center">
          <li className="flex items-center gap-2 cursor-pointer border border-gray-300 rounded-md px-2 py-1">
            <AddIcon className="text-gray-500 hover:text-gray-400" />
            <a
              onClick={() => setCreateOpen(true)}
              className="hover:text-gray-500 text-sm cursor-pointer"
            >
              Post a Nest
            </a>
          </li>
          <li>
            <a
              onClick={handleHomeClick}
              className="hover:text-gray-500 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={handleAboutClick}
              className="hover:text-gray-500 cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <Profile />
          </li>
        </ul>
      </div>
      {createOpen && (
        <CreateEditNest handleClose={() => setCreateOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
