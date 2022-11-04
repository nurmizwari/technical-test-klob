import { createBrowserRouter } from "react-router-dom";
import Detail from "../components/Detail";
import LamaranTerkirim from "../components/LamaranTerkirim";
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
      {
        path: "/detail-lowongan-pekerjaan/:jobVacancyCode",
        element: <Detail />,
      },
      {
        path: "/lamaran-terkirim",
        element: <LamaranTerkirim />,
      },
    ],
  },
]);

export default router;
