import { useNavigate } from "react-router-dom";
import Profile from "./profile";
import { nestIcon } from "../../assets/images";

const Navbar = () => {
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
    <nav className="p-4 px-8 bg-white w-full shadow-sm">
      <div className="w-full flex justify-between items-center mx-auto">
        <div className="text-lg font-bold flex items-center gap-2">
          <img src={nestIcon} className="max-w-[40px]" />
          findmyNest
        </div>
        <ul className="flex space-x-4 items-center">
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
    </nav>
  );
};

export default Navbar;
