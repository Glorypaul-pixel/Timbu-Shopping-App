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
    <div className="w-full px-14 py-3 bg-white shadow-lg fixed top-0 z-50">
      <div className="h-hgt flex items-center justify-between">
        <div className="flex items-center justify-between" style={{ width: "358px" }}>
          <div className="logo font-hanalei text-customPurple text-2xl">
            <h1>Timbu</h1>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-4 text-sm font-inter font-normal items-center justify-around" style={{ width: "250px", height: "28px" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li className="text-customPurple">
                <Link to="/" className="border-b-4 border-customPurple">Shop</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center md:ml-4" style={{ width: "450px" }}>
          <div className="hidden md:flex items-center border border-solid border-searchGray bg-searchGray rounded-md p-1 max-w-xs font-inter">
            <img src={Search} alt="Search bar" className="w-4 h-4 mr-1" />
            <input
              type="search"
              name="search"
              placeholder="Search devices..."
              className="bg-searchGray text-gray-600 px-1 py-0.5 outline-none flex-1 rounded-md text-sm"
            />
          </div>
          <div className="flex items-center space-x-4 md:space-x-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center relative">
              <Link to="/cart">
                <img src={Cart} alt="Cart icon" className="w-6 h-6" />
              </Link>
              <span className="w-4 h-4 rounded-full flex justify-center items-center absolute top-0 right-0 bg-red-500 text-white text-xs">
                {totalQuantity}
              </span>
            </div>
            <img src={ICON} alt="Customer image" className="w-8 h-8" />
            <p className="ml-2 hidden md:block">Hi, Blessing</p>
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                <img src={MenuIcon} alt="Menu icon" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 ml-4 ">
          <ul className="flex flex-col space-y-2 text-sm font-inter font-normal mb-2">
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
              <Link to="/" className="border-b-4 border-customPurple" onClick={toggleMenu}>
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
            <img src={Search} alt="Search bar" className="w-4 h-4" />
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
