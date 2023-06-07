import { AiFillHome } from "react-icons/ai";
// import { BsFillPeopleFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 h-full bg-sky-800 text-white ">
            {/* Sidebar content here */}
            <li>
              <Link to="/">
                {" "}
                <AiFillHome />
                Home
              </Link>
            </li>

            <li>
              <Link to="/instructors">
                {/* <BsFillPeopleFill /> */}
                Instructors
              </Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              <Link to="/dashboard">
                {/* <BiSolidDashboard /> */}
                Dashboard
              </Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/dashboard/addClass">Add A Class</Link>
            </li>
            <li>
              <Link>My Classes</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
