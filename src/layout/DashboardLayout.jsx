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
            <li className="hover:bg-[#acb13c]">
              <Link to="/">
                <AiFillHome />
                Home
              </Link>
            </li>

            <li className="hover:bg-[#acb13c]">
              <Link to="/instructors">
                <BsPeopleFill />
                Instructors
              </Link>
            </li>
            <li className="hover:bg-[#acb13c]">
              <Link to="/classes">
                <BsFillMortarboardFill />
                Classes
              </Link>
            </li>

            <div className="divider"></div>
            {/* dynamic link for admin, instructor and for user */}
            {isAdmin ? (
              <>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard">
                    <SiAdguard />
                    Admin Home
                  </Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/manageClasses">
                    <SiGoogleclassroom />
                    Manage Classes
                  </Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/manageUsers">
                    {/* <FaPeopleGroup /> */}
                    Manage Users
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard">
                    <FcManager />
                    Instructor Home
                  </Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/addClass">
                    <BiAddToQueue />
                    Add A Class
                  </Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/myClass">
                    <SiGoogleclassroom /> My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/mySelectedClass">
                    {/* <BiSolidSelectMultiple /> */}
                    My Selected Classes
                  </Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/myEnrolledClasses">
                    My Enrolled Classes
                  </Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/payment-history">Payment History</Link>
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
