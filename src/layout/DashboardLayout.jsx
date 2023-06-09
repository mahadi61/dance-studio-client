import { AiFillHome } from "react-icons/ai";
import { BsFillMortarboardFill, BsPeopleFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
// import { BsFillPeopleFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const isAdmin = true;
  const isInstructor = false;

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
                  <Link to="/dashboard/manageClasses">Manage Classes</Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/manageUsers">Manage Users</Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/addClass">Add A Class</Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/myClass">My Classes</Link>
                </li>
              </>
            ) : (
              <>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/mySelectedClass">
                    My Selected Classes
                  </Link>
                </li>
                <li className="hover:bg-[#acb13c]">
                  <Link to="/dashboard/myEnrolledClasses">
                    My Enrolled Classes
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
