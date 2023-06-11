import { createBrowserRouter } from "react-router-dom";
import ManageClasses from "../dashBoard/Admin/ManageClasses";
import ManageUsers from "../dashBoard/Admin/ManageUsers";
import MyEnrolledClasses from "../dashBoard/Student/MyEnrolledClasses";
import MySelectedClasses from "../dashBoard/Student/MySelectedClasses";
import AddClass from "../dashBoard/instructor/AddClass";
import MyClass from "../dashBoard/instructor/MyClass";
import UpdateClass from "../dashBoard/instructor/UpdateClass";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Classes from "../pages/AllClasses/Classes";
import Instructors from "../pages/Instructors/Instructors";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Payment from "../pages/payment/Payment";
import Registration from "../pages/registration/Registration";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PrivetRoute from "./PrivetRoute";
import UserRoute from "./UserRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "payment/:id/:amount",
        element: <Payment></Payment>,
      },
      // admin routes
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      // instructor routes
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "update-class-details/:id",
        element: (
          <InstructorRoute>
            <UpdateClass></UpdateClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      // user route
      {
        path: "mySelectedClass",
        element: (
          <UserRoute>
            <MySelectedClasses></MySelectedClasses>
          </UserRoute>
        ),
      },
      {
        path: "myEnrolledClasses",
        element: (
          <UserRoute>
            <MyEnrolledClasses></MyEnrolledClasses>
          </UserRoute>
        ),
      },
    ],
  },
]);

export default router;
