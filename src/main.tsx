import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import router from "./navigation/router.tsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <SpeedInsights />
  </StrictMode>,
);
