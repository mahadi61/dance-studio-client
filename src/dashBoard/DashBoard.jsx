import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center h-full w-full bg-slate-100">
      <div className="max-w-md">
        <div className="flex flex-col gap-1 items-center w-96">
          <img
            style={{ clipPath: "circle()" }}
            src={user?.photoURL}
            alt="user photo"
          />
          <p className="text-4xl font-bold capitalize">{user?.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
