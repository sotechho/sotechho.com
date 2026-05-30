import { createBrowserRouter } from "react-router";
import NotFound from "../components/not-found";
import HomePage from "../pages/home-page";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
