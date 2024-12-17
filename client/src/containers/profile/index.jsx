import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FileUpload from "../../components/file-upload";
import { authFormActions } from "../../store/slices/auth-form";

const UserProfile = () => {
  const dispatch = useDispatch();
  const store = {
    user: useSelector((state) => state.authForm.user),
  };

  console.log(store.user);
  return (
    <div className="flex items-center justify-center p-20 w-full gap-10">
      <div className="flex items-center justify-center">
        {store.user?.avatarUrl ? (
          <div className="md:w-48 md:h-48 p-1 bg-white rounded-full flex items-center justify-center ring-1 ring-blue-500 ring-opacity-50">
            <div className="bg-white rounded-full w-32 h-32 overflow-hidden">
              <img
                src={store.user.avatarUrl}
                className="w-full h-full object-cover"
                alt="user avatar"
              />
            </div>
          </div>
        ) : (
          <FileUpload
            setState={(img) =>
              dispatch(
                authFormActions.setUser({ ...store.user, avatarUrl: img.url })
              )
            }
          />
        )}
      </div>

      <div className="flex-1 flex flex-col items-center border border-gray-300 rounded-lg p-4">
        <div className="flex flex-col items-center space-y-4 w-full justify-center">
          <div className="w-full">
            <label className="text-gray-700">Name: </label>
            <span className=" font-semibold text-center">
              {store.user?.name || "No Name Available"}
            </span>
          </div>
          <div className="w-full">
            <label className="text-gray-700">Bio: </label>
            <span className=" font-semibold text-center">
              {store.user?.bio || "No Bio Available"}
            </span>
          </div>
          <div className="w-full">
            <label className="text-gray-700">Email: </label>
            <span className=" font-semibold text-center">
              {store.user?.email || "No Email Available"}
            </span>
          </div>
          <div className="w-full">
            <label className="text-gray-700">Password: </label>
            <span className=" font-semibold text-center">
              {store.user?.password ? "********" : "No Password Available"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
