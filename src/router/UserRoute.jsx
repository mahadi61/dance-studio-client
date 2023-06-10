import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../provider/AuthProvider";

const UserRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const [isAdmin] = useAdmin();
  const location = useLocation();
  if (loading || isInstructorLoading) {
    return (
      <div className="flex justify-center items-center mt-12">
        <span className="loading loading-spinner loading-lg  text-info "></span>
      </div>
    );
  }
  if (user && isInstructor) {
    return (
      <div className="flex justify-center items-center mt-12">
        <h1>
          You Are Not User! You Are instructor. Instructor Can not see user
          dashboard.
        </h1>
      </div>
    );
  }

  if (user && isAdmin) {
    return (
      <div className="flex justify-center items-center mt-12">
        <h1>
          You Are Not User! You Are Admin. Admin Can not see user dashboard.
        </h1>
      </div>
    );
  }
  if (!(user && isAdmin) || !(user && isInstructor)) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
