import { AiFillHome } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { BsFillMortarboardFill, BsPeopleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { SiAdguard, SiGoogleclassroom } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  if (isInstructorLoading) {
    return (
      <div className="flex justify-center items-center mt-12">
        <span className="loading loading-spinner loading-lg  text-info "></span>
      </div>
    );
  }
  if (isAdminLoading) {
    return (
      <div className="flex justify-center items-center mt-12">
        <span className="loading loading-spinner loading-lg  text-info "></span>
      </div>
    );
  }

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary absolute top-4 left-5 drawer-button lg:hidden"
          >
            <FaBars />
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-sky-800 text-center">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="lg:text-3xl mt-3">
            <span className="text-white bg-black p-1">Dance</span>
            <span className="bg-white text-black p-1">Studio</span>
          </div>
          <ul className="menu p-4 w-60 h-full   text-white ">
            {/* Sidebar content here */}
            <li>
              <Link to="/" className="hover:bg-[#acb13c]">
                <AiFillHome />
                Home
              </Link>
            </li>

            <li>
              <Link to="/instructors" className="hover:bg-[#acb13c]">
                <BsPeopleFill />
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/classes" className="hover:bg-[#acb13c]">
                <BsFillMortarboardFill />
                Classes
              </Link>
            </li>

            <div className="divider"></div>
            {/* dynamic link for admin, instructor and for user */}
            {isAdmin ? (
              <>
                <li>
                  <Link to="dashboard" className="hover:bg-[#acb13c]">
                    <SiAdguard />
                    Admin Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageClasses"
                    className="hover:bg-[#acb13c]"
                  >
                    <SiGoogleclassroom />
                    Manage Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/manageUsers"
                    className="hover:bg-[#acb13c]"
                  >
                    <BsPeopleFill />
                    Manage Users
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="dashboard" className="hover:bg-[#acb13c]">
                    <FcManager />
                    Instructor Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addClass" className="hover:bg-[#acb13c]">
                    <BiAddToQueue />
                    Add A Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myClass" className="hover:bg-[#acb13c]">
                    <SiGoogleclassroom /> My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="dashboard" className="hover:bg-[#acb13c]">
                    <FcManager />
                    User Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/mySelectedClass"
                    className="hover:bg-[#acb13c]"
                  >
                    {/* <BiSolidSelectMultiple /> */}
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/myEnrolledClasses"
                    className="hover:bg-[#acb13c]"
                  >
                    <SiGoogleclassroom />
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/payment-history"
                    className="hover:bg-[#acb13c]"
                  >
                    Payment History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
