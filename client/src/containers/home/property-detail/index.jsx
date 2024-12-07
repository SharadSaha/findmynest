import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FMNButton from "../../../components/generic/button";
import PlaceIcon from "@mui/icons-material/Place";

const PropertyDetail = () => {
  const property = {
    id: 1,
    name: "Luxury Villa",
    description: "A beautiful luxury villa with a stunning ocean view.",
    location: "Malibu, California",
    imageUrls: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    reviews: [
      {
        name: "John Doe",
        rating: 5,
        review:
          "This villa is absolutely stunning! The location is perfect, the view is breathtaking, and the amenities are top-notch. The staff is super friendly and accommodating. The villa is spacious and very well maintained. The pool is amazing! I would definitely stay here again.",
      },
      {
        name: "John Doe",
        rating: 5,
        review:
          "This villa is absolutely stunning! The location is perfect, the view is breathtaking, and the amenities are top-notch. The staff is super friendly and accommodating. The villa is spacious and very well maintained. The pool is amazing! I would definitely stay here again.",
      },
      {
        name: "John Doe",
        rating: 5,
        review:
          "This villa is absolutely stunning! The location is perfect, the view is breathtaking, and the amenities are top-notch. The staff is super friendly and accommodating. The villa is spacious and very well maintained. The pool is amazing! I would definitely stay here again.",
      },
      {
        name: "Jane Doe",
        rating: 4,
        review:
          "I loved the view from the villa! It was so beautiful to see the ocean from the balcony. The villa itself was very clean and comfortable. The staff was friendly and helpful. The only thing that was a little disappointing was that the pool was not as big as I expected. But overall, I would definitely recommend this villa to anyone looking for a great vacation spot!",
      },
    ],
  };

  return (
    <div className="flex flex-col w-full h-full px-20 py-10">
      <Link to="/nests">
        <ArrowBackIcon />
      </Link>

      <div className="flex gap-5 w-full h-full">
        <div className="w-2/3 flex flex-col">
          <div className="flex gap-5 items-center justify-between">
            <div className="flex flex-col py-2">
              <div className="text-3xl font-bold flex gap-2 items-center">
                {property.name}
                <PlaceIcon className="cursor-pointer" />
              </div>
              <div className="text-gray-600">{property.location}</div>
            </div>

            <div>
              <FMNButton size="small">Contact Owner</FMNButton>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 cursor-pointer">
            <div
              className="w-full h-64 overflow-hidden rounded-lg shadow-lg relative md:col-span-3 md:row-span-1"
              style={{
                boxShadow:
                  "0 7px 10px rgba(0,0,0,0.30), 0 5px 5px rgba(0,0,0,0.22)",
              }}
            >
              <img
                className="w-full h-full object-cover absolute inset-0 transition duration-500 ease-in-out transform hover:scale-110"
                src={property.imageUrls[0]}
                alt={property.name}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 col-span-1 row-span-1 md:col-span-3 md:row-span-2">
              {property.imageUrls.slice(1).map((url, index) => (
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

          <p className="mt-4">{property.description}</p>
          <p className="mt-4 font-bold">Location: {property.location}</p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold my-4">Reviews</h2>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
