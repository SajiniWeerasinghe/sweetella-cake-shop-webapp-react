import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

/* Swiper global styles */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
