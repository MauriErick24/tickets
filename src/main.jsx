import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const routerReact = createBrowserRouter(router);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerReact} />
  </StrictMode>
);
