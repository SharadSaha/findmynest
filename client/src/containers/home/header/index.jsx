import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./style.css";
import { headerImage } from "../../../assets/images";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../store/slices/filter";

const Header = () => {
  const textRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        x: -100,
        opacity: 0,
        scale: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const element = document.getElementById("properties");
      element.scrollIntoView({ behavior: "smooth" });
      if (!e.target.value) {
        dispatch(filterActions.resetFilter());
        return;
      }
      dispatch(
        filterActions.setFilter({ search: e.target.value, isApplied: true })
      );
      e.target.blur();
    }
  };

  return (
    <div
      className="bg-no-repeat bg-center bg-cover header-container h-[500px] rounded-lg shadow-lg p-4 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="flex items-center justify-center bg-white rounded-full w-1/2 p-2 my-10">
          <i className="fa fa-search text-2xl text-gray-600"></i>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-full focus:outline-none"
            placeholder="Enter location or keyword..."
            onKeyDown={handleSearch}
          />
        </div>
        <h1 ref={textRef} className="text-white text-4xl font-bold pb-10">
          Need a home? Use <span className="text-yellow-500">findmyNest</span>!
        </h1>
      </div>
    </div>
  );
};

export default Header;
