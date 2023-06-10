import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../provider/AuthProvider";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();
  if (loading || isInstructorLoading) {
    return (
      <div className="flex justify-center items-center mt-12">
        <span className="loading loading-spinner loading-lg  text-info "></span>
      </div>
    );
  }
  if (user && isInstructor) {
    return children;
  }

  if (!(user && isInstructor)) {
    return (
      <div className="flex justify-center items-center mt-12">
        <h1>You Are Not Admin!</h1>
      </div>
    );
  }

  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
