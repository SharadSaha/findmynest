import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: {
            background: "#363636",
            color: "#fff",
          },
        },
      }}
    ></Toaster>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
