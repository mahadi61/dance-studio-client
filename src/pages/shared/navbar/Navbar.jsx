import { useContext, useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, setUser, setObserverState } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Logout Successful!", "", "success");
        setUser(null);
        navigate("/");
        setObserverState(new Date().getTime());
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const navItems = (
    <>
      <li>
        <label className="swap swap-flip">
          {/* this hidden checkbox controls the state */}
          <input onChange={handleThemeChange} type="checkbox" />

          {/* sun icon */}

          <span className="flex gap-1 items-center swap-on">
            <BsSun />
            Light Mode
          </span>

          {/* moon icon */}

          <span className="flex gap-1 items-center swap-off">
            <BsFillMoonFill />
            Dark Mode
          </span>
        </label>
      </li>
      <li>
        <Link to="/" className="font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors" className="font-bold">
          Instructors
        </Link>
      </li>
      <li>
        <Link to="/classes" className="font-bold">
          Classes
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard/dashboard" className="font-bold">
              Dashboard
            </Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="font-bold">
              Logout
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="max-w-7xl">
      <div className="navbar  text-white absolute top-0 z-10 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#1C222F] rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="lg:text-3xl   ">
            <span className="text-white bg-black p-1">Dance</span>
            <span className="bg-white text-black p-1">Studio</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>

          {user && (
            <div className="w-10">
              <img style={{ clipPath: "circle()" }} src={user?.photoURL} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
