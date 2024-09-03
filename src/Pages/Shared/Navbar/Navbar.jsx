import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logos.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none border text-[#055BAA] font-semibold  mr-3"
              : isPending
              ? "pending"
              : "mr-3"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none border text-[#055BAA] font-semibold  mr-3"
              : isPending
              ? "pending"
              : "mr-3"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none border text-[#055BAA] font-semibold  mr-3"
              : isPending
              ? "pending"
              : "mr-3"
          }
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/rentals"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none border text-[#055BAA] font-semibold  mr-3"
              : isPending
              ? "pending"
              : "mr-3"
          }
        >
          Manage Rentals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/details"
          className={({ isActive, isPending }) =>
            isActive
              ? "bg-none border text-[#055BAA] font-semibold  mr-3"
              : isPending
              ? "pending"
              : "mr-3"
          }
        >
          Details Page
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar shadow-md px-5 md:px-10 lg:px-20  bg-[#ecf5ff]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {links}
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-none border text-[#055BAA] font-semibold  mr-3"
                    : isPending
                    ? "pending"
                    : "mr-3"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-none border text-[#055BAA] font-semibold  mr-3"
                    : isPending
                    ? "pending"
                    : "mr-3"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-none border text-[#055BAA] font-semibold  mr-3"
                    : isPending
                    ? "pending"
                    : "mr-3"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/details"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-none border text-[#055BAA] font-semibold  mr-3"
                    : isPending
                    ? "pending"
                    : "mr-3"
                }
              >
                Details Page
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-center ">
          <Link to="/">
            {" "}
            <img className="w-auto h-10 lg:h-16" src={logo} />
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <NavLink
                to="/rentals"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-none border text-[#055BAA] font-semibold  mr-3"
                    : isPending
                    ? "pending"
                    : "mr-3"
                }
              >
                Manage Rentals
              </NavLink>
            </li>
          </ul>
          <ul className="menu menu-horizontal px-1 flex">
            <li>
              <a>Sign In</a>
            </li>
          </ul>
          {/* <a className="text-sm ">Sign In</a> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
