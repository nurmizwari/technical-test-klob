import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageLayout from "../components/PageLayout";
import Show from "../components/Show";
const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Show />,
      },
    ],
  },
]);

export default router;
