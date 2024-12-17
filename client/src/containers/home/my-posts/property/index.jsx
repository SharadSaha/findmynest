import { useNavigate } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Property = ({ id, name, description, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex relative max-w-[280px] max-h-[320px] w-[280px] h-[320px] rounded-2xl bg-center bg-cover duration-500 group cursor-pointer overflow-hidden"
      style={{
        boxShadow: "0 7px 10px rgba(0,0,0,0.30), 0 5px 5px rgba(0,0,0,0.22)",
      }}
      onClick={() => navigate(`/nests/${id}`)}
    >
      <img
        className="w-full h-full rounded-2xl group-hover:brightness-75 transition duration-500 ease-in-out transform hover:scale-110"
        src={imageUrl}
        alt={name}
        loading="lazy"
      />

      <div className="absolute bottom-0 left-0 p-4 text-white w-full overflow-hidden text-sm font-regular">
        <div className="truncate font-bold flex items-center justify-between">
          {name}
          <StarBorderIcon fontSize="small" className="text-white" />
        </div>
        <div className="truncate">{description}</div>
      </div>
    </div>
  );
};

export default Property;