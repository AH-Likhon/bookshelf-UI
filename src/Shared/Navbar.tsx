import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-neutral text-neutral-content">
      <div className="navbar-start md:w-full lg:w-1/3 ">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content m-0 z-[1] p-4 shadow rounded w-screen left-[-8px] bg-neutral text-neutral-content"
          >
            <li className="font-medium">
              <Link className="hover:text-neutral-content" to="/all-books">
                All Books
              </Link>
            </li>
            <li className="font-medium">
              <Link className="hover:text-neutral-content" to="/login">
                Login
              </Link>
            </li>
            <li className="font-medium">
              <Link className="hover:text-neutral-content" to="/signup">
                Sign up
              </Link>
            </li>
            <li className="font-medium">
              <p className="hover:text-neutral-content">Wishlist</p>
            </li>
            <li className="font-medium">
              <p className="hover:text-neutral-content">Currently Reading</p>
            </li>
            <li className="font-medium">
              <p className="hover:text-neutral-content">Add New Book</p>
            </li>
            <li className="font-medium">
              <p className="hover:text-neutral-content">user</p>
            </li>
            <li className="font-medium">
              <p className="hover:text-neutral-content">logout</p>
            </li>
          </ul>
        </div>
        <Link className="font-semibold italic text-base" to="/">
          BookShelf
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex md:w-full lg:w-2/3">
        <ul className="menu menu-horizontal px-1">
          <li className="font-medium text-base">
            <Link className="hover:text-neutral-content" to="/all-books">
              All Books
            </Link>
          </li>
          <li className="font-medium text-base">
            <Link className="hover:text-neutral-content" to="/login">
              Login
            </Link>
          </li>
          <li className="font-medium text-base">
            <Link className="hover:text-neutral-content" to="/signup">
              Sign up
            </Link>
          </li>
          <li className="font-medium text-base">
            <p className="hover:text-neutral-content">Wishlist</p>
          </li>
          <li className="font-medium text-base">
            <p className="hover:text-neutral-content">Currently Reading</p>
          </li>
          <li className="font-medium text-base">
            <p className="hover:text-neutral-content">Add New Book</p>
          </li>
          <li className="font-medium text-base">
            <p className="hover:text-neutral-content">user</p>
          </li>
          <li className="font-medium text-base">
            <p className="hover:text-neutral-content">logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
