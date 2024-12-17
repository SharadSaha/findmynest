import { useEffect, useRef } from "react";
import { fileUploadIcon } from "../../assets/images";

const FileUpload = ({ setState }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dqa2kl7wy",
        uploadPreset: "findmyNest",
      },
      function (error, result) {
        if (result?.event === "success") {
          setState({
            id: result.info.public_id,
            url: result.info.secure_url,
          });
        }
        if (error) {
          alert(error.message);
          // console.log(error);
        }
      }
    );
  }, []);
  return (
    <div
      className="flex items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer"
      onClick={() => widgetRef.current.open()}
    >
      <div className="flex flex-col items-center">
        <img src={fileUploadIcon} className="w-10 h-10 mb-2" />
        <p className="text-gray-500 text-sm p-5">Upload your image or video</p>
      </div>
    </div>
  );
};

export default FileUpload;
