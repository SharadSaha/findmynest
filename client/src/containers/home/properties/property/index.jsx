import { useNavigate } from "react-router-dom";
import { noPropertyImage } from "../../../../assets/images";
import PlaceIcon from "@mui/icons-material/Place";

const Property = ({ property }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 w-ful  bg-gradient-to-r from-purple-200 to-blue-200 p-4 rounded-2xl">
      <div
        className="flex relative max-w-[200px] max-h-[230px] w-[200px] h-[230px] rounded-2xl bg-center bg-cover duration-500 group cursor-pointer overflow-hidden"
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
        <div
          className="font-bold truncate cursor-pointer text-gray-700 hover:underline"
          onClick={() => navigate(`/nests/${property.id}`)}
        >
          {property.title}
        </div>
        <div className="text-sm truncate text-gray-500">
          {property.description}
        </div>
        <div className="font-bold text-brown-500">
          ₹ {property.price.toLocaleString()}
        </div>
        <div className="text-sm text-gray-600">
          {property.size} sqft | {property.bathroomCount} Bathrooms |{" "}
          {property.bedroomCount} Bedrooms
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
