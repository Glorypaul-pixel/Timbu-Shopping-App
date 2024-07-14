import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ICON from "./image/Ellipse.png";
import Search from "./image/search-thin.png";
import Cart from "./image/cart-linear.png";
import MenuIcon from "./image/menu.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-4 md:px-7 py-3 bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="h-hgt flex items-center justify-between">
        <div className="flex items-center">
          <div className="logo font-hanalei text-customPurple text-2xl">
            <h1>Timbu</h1>
          </div>
          <nav className="hidden md:flex ml-6 space-x-4">
            <Link to="/" className="text-sm font-inter">
              Home
            </Link>
            <Link to="/categories" className="text-sm font-inter">
              Categories
            </Link>
            <Link
              to="/"
              className="text-sm font-inter text-customPurple border-b-4 border-transparent hover:border-customPurple"
            >
              Shop
            </Link>
            <Link to="/help" className="text-sm font-inter">
              Help
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center border border-solid border-searchGray bg-searchGray rounded-md p-1 max-w-xs font-inter">
            <img src={Search} alt="Search bar" className="w-4 h-4 mr-1" />
            <input
              type="search"
              name="search"
              placeholder="Search devices..."
              className="bg-searchGray text-gray-600 px-1 py-0.5 outline-none flex-1 rounded-md text-sm"
            />
          </div>
          <div className="flex items-center ml-4">
            <div className="relative">
              <Link to="/cart">
                <img src={Cart} alt="Cart icon" className="w-8 h-8" />
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex justify-center items-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </div>
            <img src={ICON} alt="Customer image" className="w-8 h-8 ml-4" />
            <p className="ml-2 hidden md:block">Hi, Blessing</p>
          </div>
          <div className="md:hidden ml-4">
            <button onClick={toggleMenu}>
              <img src={MenuIcon} alt="Menu icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2 text-sm font-inter">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" onClick={toggleMenu}>
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="border-b-4 border-customPurple"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link to="/help" onClick={toggleMenu}>
                Help
              </Link>
            </li>
          </ul>
          <div className="search flex items-center border border-solid border-gray-300 bg-neutral-300 rounded-md p-1 max-w-full mt-4 font-inter">
            <img src={Search} alt="Search bar" className="w-4 h-4 mr-1" />
            <input
              type="search"
              name="search"
              placeholder="Search devices..."
              className="bg-neutral-300 text-black px-1 py-0.5 outline-none flex-1 rounded-md text-sm"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
