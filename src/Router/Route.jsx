import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DetailPage from "../pages/Donations/Donation";
import Donated from "../pages/Donated/Donated";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donated",
        element: <Donated />,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donate/:id",
        element: <DetailPage />,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
