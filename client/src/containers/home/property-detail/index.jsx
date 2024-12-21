import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FMNButton from "../../../components/generic/button";
import PlaceIcon from "@mui/icons-material/Place";
import { useMemo, useState } from "react";
import ContactForm from "./contact";
import FMNMap from "../../../components/map";
import { useGetNestQuery } from "../../../services/nest";
import { noPropertyImage } from "../../../assets/images";
import EditIcon from "@mui/icons-material/Edit";
import CreateEditNest from "../create-nest";
import { useDispatch, useSelector } from "react-redux";
import { postFormActions } from "../../../store/slices/post-form";

const PropertyDetail = () => {
  const [contactModal, setContactModal] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const { data: property, refetch } = useGetNestQuery(params.propertyId, {
    skip: !params.propertyId,
    refetchOnMountOrArgChange: true,
  });

  const store = {
    user: useSelector((state) => state.authForm.user),
    markers: useSelector((state) => state.map.markers),
  };

  const isOwner = store.user.username === property?.user.username;

  const exampleImages = useMemo(() => {
    const imgCount = property?.imgUrls.slice(1).length;
    if (imgCount >= 2) return property?.imgUrls.slice(1).length;
    return [property?.imgUrls?.[1], property?.imgUrls?.[2]];
  }, [property?.imgUrls]);

  const handleOpenEditModal = () => {
    dispatch(
      postFormActions.setState({
        ...property,
        ...property?.nestDetail,
      })
    );
    setEditOpen(true);
  };

  const uniqueMarkers = useMemo(() => {
    const markers = store.markers;
    const unique = markers.filter(
      (v, i, a) => a.findIndex((t) => t.lat === v.lat && t.lng === v.lng) === i
    );
    return unique;
  }, [store.markers]);

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
                {property?.title}
                <PlaceIcon className="cursor-pointer" />
              </div>
              <div className="text-gray-600">{property?.address}</div>
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
                src={property?.imgUrls?.[0] || noPropertyImage}
                alt={property?.name}
              />
            </div>
            <div className="grid grid-cols-1 gap-2 col-span-1 row-span-1 md:col-span-1 md:row-span-2">
              {exampleImages.map((url, index) => (
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
                    src={url || noPropertyImage}
                    alt={`${property?.name} ${index + 2}`}
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
                <p className="text-gray-600">
                  {property?.nestDetail?.description}
                </p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Location</p>
                <p className="text-gray-600">
                  {property?.city}, {property?.address}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Beds: </p>
                <p className="text-gray-600">{property?.bedroomCount}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Baths: </p>
                <p className="text-gray-600">{property?.bathroomCount}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Type: </p>
                <p className="text-gray-600">{property?.nestType}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Available for: </p>
                <p className="text-gray-600">{property?.userActionType}</p>
              </div>
              <div className="bg-white rounded p-4">
                <p className="font-bold text-gray-700">Price: </p>
                <p className="text-gray-600">
                  Rs. {property?.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <div
            className="flex items-center gap-2 px-5 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 p-2"
            style={{
              opacity: isOwner ? 1 : 0.5,
              pointerEvents: isOwner ? "auto" : "none",
              width: "fit-content",
            }}
          >
            <p className="text-gray-600">Edit Post</p>
            <EditIcon
              className="cursor-pointer"
              onClick={handleOpenEditModal}
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="text-2xl font-bold mb-4">View on Map</div>
            <FMNMap markers={uniqueMarkers} />
          </div>
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
            name: property?.user?.name || "NA",
            email: property?.user?.email || "NA",
            username: property?.user?.username || "NA",
            photo: property?.user.photo,
          }}
        />
      )}
      {editOpen && (
        <CreateEditNest
          handleClose={() => {
            setEditOpen(false);
            refetch();
          }}
          mode="edit"
          id={property?.id}
        />
      )}
    </div>
  );
};

export default PropertyDetail;
