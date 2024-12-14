import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postFormActions } from "../../../store/slices/post-form/index";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateEditNest = ({ mode, ...props }) => {
  const dispatch = useDispatch();

  const store = {
    name: useSelector((state) => state.postForm.name),
    description: useSelector((state) => state.postForm.description),
    imageUrl: useSelector((state) => state.postForm.imageUrl),
    location: useSelector((state) => state.postForm.location),
    priceRange: useSelector((state) => state.postForm.priceRange),
  };
  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    props.handleClose();
  };

  const handleFormChange = (field, value) => {
    dispatch(postFormActions.setForm({ field, value }));
  };

  return (
    <>
      <Dialog
        open
        onClose={handleClose}
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
            onClick={handleClose}
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
          <form className="space-y-6" onSubmit={props.handleSubmit}>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="image"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  onChange={() => null}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  value={store.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="location"
                className="text-gray-700 dark:text-gray-300"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                value={""}
                onChange={() => null}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="description"
                className="text-gray-700 dark:text-gray-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                value={store.description}
                onChange={(e) =>
                  handleFormChange("description", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="priceRange"
                className="text-gray-700 dark:text-gray-300"
              >
                Price Range
              </label>
              <input
                type="number"
                id="priceRange"
                name="priceRange"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                value={""}
                onChange={() => null}
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
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
