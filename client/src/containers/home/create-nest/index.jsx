import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFormActions } from "../../../store/slices/post-form/index";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Slider } from "@mui/material";
import toast from "react-hot-toast";
import {
  useAddNestMutation,
  useLazyGetAllNestsQuery,
  useUpdateNestMutation,
} from "../../../services/nest";
import FileUpload from "../../../components/file-upload";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateEditNest = ({ mode = "create", ...props }) => {
  const dispatch = useDispatch();
  const [addNest] = useAddNestMutation();
  const [updateNest] = useUpdateNestMutation();
  const [fetchMarkers] = useLazyGetAllNestsQuery();

  const store = {
    title: useSelector((state) => state.postForm.title),
    price: useSelector((state) => state.postForm.price),
    lat: useSelector((state) => state.postForm.lat),
    long: useSelector((state) => state.postForm.long),
    address: useSelector((state) => state.postForm.address),
    city: useSelector((state) => state.postForm.city),
    bedroomCount: useSelector((state) => state.postForm.bedroomCount),
    bathroomCount: useSelector((state) => state.postForm.bathroomCount),
    utilities: useSelector((state) => state.postForm.utilities),
    petsPolicy: useSelector((state) => state.postForm.petsPolicy),
    incomePolicy: useSelector((state) => state.postForm.incomePolicy),
    size: useSelector((state) => state.postForm.size),
    schoolCount: useSelector((state) => state.postForm.schoolCount),
    busCount: useSelector((state) => state.postForm.busCount),
    restaurantCount: useSelector((state) => state.postForm.restaurantCount),
    userActionType: useSelector((state) => state.postForm.userActionType),
    nestType: useSelector((state) => state.postForm.nestType),
    description: useSelector((state) => state.postForm.description),
    imgUrls: useSelector((state) => state.postForm.imgUrls),
    user: useSelector((state) => state.authForm.user),
  };

  const [imgUrls, setImgUrls] = useState(
    store.imgUrls?.map((img) => ({
      url: img,
    })) || []
  );

  const handleFormChange = (field, value) => {
    dispatch(postFormActions.setForm({ field, value }));
  };

  const priceRange = [
    {
      value: 100,
      label: <span className="text-gray-400">₹100</span>,
    },
    {
      value: 10000000,
      label: <span className="text-gray-400">₹10000000</span>,
    },
  ];
  const valuetext = (value) => {
    return `₹${value}`;
  };

  const handleFormClose = () => {
    dispatch(postFormActions.resetForm());
    props.handleClose();
  };

  const handleValidation = () => {
    return store.title && store.price && store.description;
  };
  const handleSubmit = () => {
    if (!handleValidation()) {
      toast.error("Please fill all the required fields");
      return;
    }
    if (mode === "create") {
      addNest({
        nest: {
          title: store.title,
          price: parseInt(store.price),
          imgUrls: imgUrls.map((item) => item.url),
          lat: store.lat,
          long: store.long,
          address: store.address,
          city: store.city,
          bedroomCount: parseInt(store.bedroomCount),
          bathroomCount: parseInt(store.bathroomCount),
          userActionType: store.userActionType,
          nestType: store.nestType,
          userId: store.user.id,
        },
        nestDetail: {
          description: store.description,
          utilities: store.utilities,
          petsPolicy: store.petsPolicy,
          incomePolicy: store.incomePolicy,
          size: parseInt(store.size),
          schoolCount: parseInt(store.schoolCount),
          busCount: parseInt(store.busCount),
          restaurantCount: parseInt(store.restaurantCount),
        },
      })
        .unwrap()
        .then(() => {
          handleFormClose();
        });
      return;
    }
    updateNest({
      id: props.id,
      nest: {
        title: store.title,
        price: parseInt(store.price),
        imgUrls: imgUrls.map((item) => item.url),
        lat: store.lat,
        long: store.long,
        address: store.address,
        city: store.city,
        bedroomCount: parseInt(store.bedroomCount),
        bathroomCount: parseInt(store.bathroomCount),
        userActionType: store.userActionType,
        nestType: store.nestType,
        userId: store.user.id,
      },
      nestDetail: {
        description: store.description,
        utilities: store.utilities,
        petsPolicy: store.petsPolicy,
        incomePolicy: store.incomePolicy,
        size: parseInt(store.size),
        schoolCount: parseInt(store.schoolCount),
        busCount: parseInt(store.busCount),
        restaurantCount: parseInt(store.restaurantCount),
      },
    })
      .unwrap()
      .then(() => {
        handleFormClose();
        fetchMarkers();
      });
  };

  return (
    <>
      <Dialog
        open
        onClose={handleFormClose}
        TransitionComponent={Transition}
        className="rounded-2xl"
        sx={{
          "& .MuiDialog-paper": {
            width: "70%",
            maxWidth: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <div className="bg-gray-100 dark:bg-gray-800 p-12 rounded-2xl">
          <button
            type="button"
            className="absolute top-3 right-2 p-3 text-gray-700 dark:text-gray-300 hover:text-gray-500"
            onClick={handleFormClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <FileUpload
            setState={(img) => setImgUrls((prev) => [...prev, img])}
          />
          {imgUrls.length > 0 && (
            <div className="flex flex-wrap gap-5 overflow-y-scroll max-h-[200px] w-full my-5">
              {imgUrls.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt="img"
                  className="w-[100px] h-[100px] object-cover"
                />
              ))}
            </div>
          )}
          <form
            className="pt-5 space-y-6 overflow-scroll flex flex-col justify-center items-center"
            onSubmit={props.handleSubmit}
          >
            <div className="flex gap-5 w-full">
              <div className="flex flex-1 flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  value={store.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label
                htmlFor="description"
                className="text-gray-700 dark:text-gray-300"
              >
                Description
              </label>
              <ReactQuill
                theme="snow"
                className="text-white"
                value={store.description}
                onChange={(value) => handleFormChange("description", value)}
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label
                htmlFor="location"
                className="text-gray-700 dark:text-gray-300"
              >
                Property Address
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                value={store.address}
                onChange={(e) => handleFormChange("address", e.target.value)}
              />
            </div>

            <div className="flex gap-5 w-full justify-between items-center">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="city"
                  className="text-gray-700 dark:text-gray-300"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  value={store.city}
                  onChange={(e) => handleFormChange("city", e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full pr-10 pl-5">
                <label
                  htmlFor="price"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Price
                </label>

                <Slider
                  size="small"
                  defaultValue={100}
                  aria-label="Small"
                  valueLabelDisplay="auto"
                  marks={priceRange}
                  getAriaValueText={valuetext}
                  step={10}
                  className="text-white"
                  min={100}
                  max={10000000}
                  value={store.price}
                  onChange={(e) => handleFormChange("price", e.target.value)}
                />
              </div>
            </div>

            {/* Property Details */}
            <div className="flex gap-5 w-full justify-between">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="type"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Listing Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  value={store.userActionType}
                  onChange={(e) =>
                    handleFormChange("userActionType", e.target.value)
                  }
                >
                  <option value="rent">Rent</option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="lattitude"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Lattitude
                </label>
                <input
                  type="number"
                  id="lattitude"
                  name="lattitude"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  value={store.lat}
                  onChange={(e) => handleFormChange("lat", e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="longitude"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Longitude
                </label>
                <input
                  type="number"
                  id="longitude"
                  name="longitude"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  value={store.long}
                  onChange={(e) => handleFormChange("long", e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="type"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Property Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  value={store.nestType}
                  onChange={(e) => handleFormChange("nestType", e.target.value)}
                >
                  <option value="appartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-2 mt-5 w-full pt-10">
              <h1 className="text-lg font-bold text-white">Utilities</h1>
              <div className="flex flex-col gap-5 w-full justify-between">
                <div className="flex gap-5 justify-between">
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="noOfSchools"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      No of Schools
                    </label>
                    <input
                      type="number"
                      id="noOfSchools"
                      name="noOfSchools"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      value={store.schoolCount}
                      onChange={(e) =>
                        handleFormChange("schoolCount", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="noOfRestaurants"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      No of Restaurants
                    </label>
                    <input
                      type="number"
                      id="noOfRestaurants"
                      name="noOfRestaurants"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      value={store.restaurantCount}
                      onChange={(e) =>
                        handleFormChange("restaurantCount", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="totalSize"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      Total Size (in sq ft)
                    </label>
                    <input
                      type="number"
                      id="totalSize"
                      name="totalSize"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      value={store.size}
                      onChange={(e) => handleFormChange("size", e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-between">
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="noOfBedrooms"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      No of Bedrooms
                    </label>
                    <input
                      type="number"
                      id="noOfBedrooms"
                      name="noOfBedrooms"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      value={store.bedroomCount}
                      onChange={(e) =>
                        handleFormChange("bedroomCount", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="noOfBathrooms"
                      className="text-gray-700 dark:text-gray-300"
                    >
                      No of Bathrooms
                    </label>
                    <input
                      type="number"
                      id="noOfBathrooms"
                      name="noOfBathrooms"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      value={store.bathroomCount}
                      onChange={(e) =>
                        handleFormChange("bathroomCount", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="text-white font-medium"
            >
              {mode === "edit" ? "Update" : "Create"}
            </button>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default CreateEditNest;
