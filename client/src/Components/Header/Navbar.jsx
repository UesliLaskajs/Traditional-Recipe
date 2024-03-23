import { useState } from "react";
import logo from "../../assets/logo.png";
import { BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <div className="bg-blue-500 dark:bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="logo mr-4">
            <img src={logo} className="w-20 md:w-32" alt="Logo" />
          </div>

          <button
            type="button"
            onClick={handleToggle}
            className="md:hidden text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600"
          >
            {toggle ? <BsXLg /> : <span>&#9776;</span>}
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to={"/"} className="text-white">
            Home
          </Link>
          <Link to="/recipes" className="text-white">
            Recipes
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/create-recipe" className="text-white">
            Create Recipe
          </Link>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            onClick={handleSearch}
            className="md:hidden text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:ring-gray-600"
          >
            {search ? <BsXLg /> : <span>&#128269;</span>}
          </button>

          {search && (
            <input
              type="text"
              className="md:hidden block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          )}

          <input
            type="text"
            className=" hidden sm:block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>

      {toggle && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link to={"/"} className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/recipes"} className="text-white">
                Recipes
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-white">
              About
              </Link>
            </li>
            <li>
              <Link to={"/create-recipe"}className="text-white">
                Create Recipe
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
