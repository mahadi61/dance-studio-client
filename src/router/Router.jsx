import { createBrowserRouter } from "react-router-dom";
import MyEnrolledClasses from "../dashBoard/Student/MyEnrolledClasses";
import MySelectedClasses from "../dashBoard/Student/MySelectedClasses";
import AddClass from "../dashBoard/instructor/AddClass";
import MyClass from "../dashBoard/instructor/MyClass";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Classes from "../pages/AllClasses/Classes";
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
        path: "classes",
        element: <Classes></Classes>,
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
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "mySelectedClass",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
    ],
  },
]);

export default router;
