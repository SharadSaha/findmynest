import { useNavigate } from "react-router-dom";
import { noPropertyImage } from "../../../../assets/images";
import PlaceIcon from "@mui/icons-material/Place";

const Property = ({ property }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 w-ful  bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-2xl">
      <div
        className="flex relative max-w-[280px] max-h-[230px] w-[280px] h-[230px] rounded-2xl bg-center bg-cover duration-500 group cursor-pointer overflow-hidden"
        style={{
          boxShadow: "0 7px 10px rgba(0,0,0,0.30), 0 5px 5px rgba(0,0,0,0.22)",
        }}
      >
        <img
          className="w-full h-full rounded-2xl group-hover:brightness-75 transition duration-500 ease-in-out transform hover:scale-110"
          src={property.imgUrls?.[0] || noPropertyImage}
          alt={name}
          loading="lazy"
          onClick={() => navigate(`/nests/${property.id}`)}
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div className="flex items-center gap-2">
          <div
            className="font-bold truncate cursor-pointer text-gray-700 hover:underline"
            onClick={() => navigate(`/nests/${property.id}`)}
          >
            {property.title}
          </div>
          <div
            className="px-3 py-1 rounded-full border text-xs font-semibold capitalize"
            style={{
              borderRadius: "50px",
              borderImageSlice: 1,
              borderWidth: "2px",
              borderImageSource:
                "linear-gradient(to right,rgb(36, 24, 111),rgb(195, 74, 228))",
            }}
          >
            {property.nestType}
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-gray-700">
          Available for{" "}
          <span className="bg-gradient-to-r from-pink-100 to-violet-100 px-2 py-1 rounded-lg border border-gray-700">
            {property.userActionType}
          </span>
        </div>
        <div className="text-sm truncate text-gray-500">
          {property.description}
        </div>
        <div className="font-bold text-brown-500">
          ₹ {property.price.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">
          {property.nestDetail?.size || "0"} sqft | {property.bathroomCount}{" "}
          Bathrooms | {property.bedroomCount} Bedrooms
        </div>
        <div className="flex items-center gap-2">
          <PlaceIcon fontSize="small" />
          <div className="text-sm text-gray-700">{property.city}</div>
        </div>
        <div
          className="hover:underline cursor-pointer text-gray-700"
          onClick={() => navigate(`/nests/${property.id}`)}
        >
          View Details
        </div>
      </div>
    </div>
  );
};

export default Property;
