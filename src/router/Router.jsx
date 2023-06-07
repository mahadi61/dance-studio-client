import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Instructors from "../pages/Instructors/Instructors";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
