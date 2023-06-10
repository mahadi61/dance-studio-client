import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center mt-12">
        <span className="loading loading-spinner loading-lg  text-info "></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }

  if (!(user && isAdmin)) {
    return (
      <div className="flex justify-center items-center mt-12">
        <h1>You Are Not Admin!</h1>
      </div>
    );
  }

  return <Navigate to="/Login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
