import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FMNButton from "../../../components/generic/button";
import PlaceIcon from "@mui/icons-material/Place";
import { useState } from "react";
import ContactForm from "./contact";
import FMNMap from "../../../components/map";

const PropertyDetail = () => {
  const [contactModal, setContactModal] = useState(false);
  const property = {
    id: "1",
    title: "Luxury Apartment",
    price: 200000,
    imgUrls: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    lat: "34.0522",
    long: "-118.2437",
    address: "123 Main St",
    city: "Los Angeles",
    bedroomCount: 3,
    bathroomCount: 2,
    utilities: "Water, Electricity",
    petsPolicy: "Pets Allowed",
    incomePolicy: "Income Verification Required",
    size: 1200,
    schoolCount: 5,
    busCount: 3,
    restaurantCount: 10,
    userActionType: "buy",
    nestType: "apartment",
    description: "A beautiful luxury apartment in the heart of the city.",
  };

  return (
    <div className="flex flex-col w-full h-full px-20 py-10">
      <Link to="/">
        <ArrowBackIcon />
      </Link>

      <div className="flex gap-5 w-full h-full">
        <div className="w-2/3 flex flex-col">
          <div className="flex gap-5 items-center justify-between">
            <div className="flex flex-col py-2">
              <div className="text-3xl font-bold flex gap-2 items-center">
                {property.title}
                <PlaceIcon className="cursor-pointer" />
              </div>
              <div className="text-gray-600">{property.address}</div>
            </div>

            <div>
              <FMNButton size="small" onClick={() => setContactModal(true)}>
                Contact Owner
              </FMNButton>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 cursor-pointer">
            <div
              className="w-full h-64 overflow-hidden rounded-lg shadow-lg relative md:col-span-1 md:row-span-1"
              style={{
                boxShadow:
                  "0 7px 10px rgba(0,0,0,0.30), 0 5px 5px rgba(0,0,0,0.22)",
              }}
            >
              <img
                className="w-full h-full object-cover absolute inset-0 transition duration-500 ease-in-out transform hover:scale-110"
                src={property.imgUrls[0]}
                alt={property.name}
              />
            </div>
            <div className="grid grid-cols-1 gap-2 col-span-1 row-span-1 md:col-span-1 md:row-span-2">
              {property.imgUrls.slice(1).map((url, index) => (
                <div
                  key={index}
                  className="w-full h-32 overflow-hidden rounded-lg shadow-lg relative"
                  style={{
                    boxShadow:
                      "0 7px 10px rgba(0,0,0,0.30), 0 5px 5px rgba(0,0,0,0.22)",
                  }}
                >
                  <img
                    className="w-full h-full object-cover absolute inset-0 transition duration-500 ease-in-out transform hover:scale-110"
                    src={url}
                    alt={`${property.name} ${index + 2}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg shadow-lg p-8 my-4">
            <h2 className="text-2xl font-bold mb-4">About this property</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Description</p>
                <p className="text-gray-600">{property.description}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Location</p>
                <p className="text-gray-600">
                  {property.city}, {property.address}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Beds: </p>
                <p className="text-gray-600">{property.bedroomCount}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Baths: </p>
                <p className="text-gray-600">{property.bathroomCount}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Type: </p>
                <p className="text-gray-600">{property.nestType}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Available for: </p>
                <p className="text-gray-600">{property.userActionType}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Price: </p>
                <p className="text-gray-600">
                  Rs. {property.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-2xl font-bold mb-4">View on Map</div>
          <FMNMap />
          {/* <h2 className="text-2xl font-bold my-4">Reviews</h2>
          <ul className="list-disc pl-8">
            {property.reviews.map((review) => (
              <li key={review.name} className="mb-2">
                <p className="font-bold">{review.name}</p>
                <p>
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        &#9733;
                      </span>
                    ))}
                </p>
                <p>{review.review}</p>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
      {contactModal && (
        <ContactForm
          handleClose={() => setContactModal(false)}
          ownerDetails={{
            name: property.user?.name || "Sharad Saha",
            email: property.user?.email || "5QGyC@example.com",
            phone: property.user?.phone || "1234567890",
            photo:
              "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          }}
        />
      )}
    </div>
  );
};

export default PropertyDetail;
