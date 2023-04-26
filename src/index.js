// scroll bar
import "simplebar/src/simplebar.css";
////////////////
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
// ----------------------------------------------------------------------

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
