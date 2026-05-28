import { createBrowserRouter } from "react-router";
import App from "../app";
import NotFound from "../components/not-found";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFound /> },
]);

export default router;
