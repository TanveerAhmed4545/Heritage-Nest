import { Link } from "react-router-dom";
import logo from "../../../../public/logos.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar px-5 md:px-10 lg:px-20 min-h-24 bg-[#ecf5ff]">
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
              <li>
                <a>Buy</a>
              </li>

              <li>
                <a>Sell</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <a>Buy</a>
            </li>
            <li>
              <a>Sell</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center ">
          <Link to="/">
            {" "}
            <img className="w-auto h-10" src={logo} />
          </Link>
        </div>
        <div className="navbar-end">
          <a className="mr-5  text-sm ">Manage Rentals</a>
          <a className="text-sm ">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
