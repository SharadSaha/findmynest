import { Dialog, Slide } from "@mui/material";
import { forwardRef, useState } from "react";
import FMNButton from "../../../../components/generic/button";
import toast from "react-hot-toast";
import { noUserImage } from "../../../../assets/images";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContactForm = ({ handleClose, ownerDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required");
      return;
    }

    toast.success("Message sent successfully");
    handleClose();
  };
  return (
    <Dialog
      open
      onClose={handleClose}
      TransitionComponent={Transition}
      className="rounded-2xl"
      sx={{
        "& .MuiDialog-paper": {
          width: "40%",
          maxWidth: "500px",
          backgroundColor: "transparent",
        },
      }}
    >
      <div className="bg-white rounded-2xl p-6">
        <div className="flex justify-between items-center pb-5">
          <h2 className="font-bold text-xl">Contact Owner</h2>
          <button
            type="button"
            className="text-gray-500 hover:text-black"
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-4 items-center">
          <img
            className="w-12 h-12 rounded-full"
            src={ownerDetails.photo || noUserImage}
            alt={ownerDetails.name}
          />
          <div className="flex flex-col">
            <span className="font-bold">{ownerDetails.name}</span>
            <span className="text-sm">
              {ownerDetails.username} - {ownerDetails.email}
            </span>
          </div>
        </div>
        <form className="flex flex-col gap-4 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-2"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Phone Number/Email"
            className="w-full border border-gray-300 rounded-md p-2"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md p-2"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <FMNButton onClick={handleSubmit}>Send Message</FMNButton>
        </form>
      </div>
    </Dialog>
  );
};
export default ContactForm;
