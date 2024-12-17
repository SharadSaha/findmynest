import { useNavigate } from "react-router-dom";

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
          src={property.imgUrls?.[0]}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <div
          className="font-bold truncate cursor-pointer hover:underline"
          onClick={() => navigate(`/nests/${property.id}`)}
        >
          {property.title}
        </div>
        <div className="text-sm truncate">{property.description}</div>
        <div className="font-bold">₹ {property.price.toLocaleString()}</div>
        <div className="text-sm">
          {property.size} sqft | {property.bathroomCount} Bathrooms |{" "}
          {property.bedroomCount} Bedrooms
        </div>
        <div className="hover:underline cursor-pointer">View Details</div>
      </div>
    </div>
  );
};

export default Property;
