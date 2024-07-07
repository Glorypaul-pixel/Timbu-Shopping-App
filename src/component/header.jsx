import { Link } from "react-router-dom";
import ICON from "./image/Ellipse.png";
import Search from "./image/search-thin.png";
import Cart from "./image/cart-linear.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-7 py-3 cursor-default">
      <div className="logo font-hanalei text-customPurple text-2xl">
        <h1>Timbu</h1>
      </div>
      <nav>
        <ul className="flex space-x-4 text-sm font-inter font-normal">
          <li className="py-2 px-3">
            <Link to="/#">Home</Link>
          </li>
          <li className="py-2 px-3">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="py-2 px-3 border-b-2 border-transparent">
            <Link
              to="/"
              className="border-b-4 border-customPurple"
            >
              Shop
            </Link>
          </li>
          <li className="py-2 px-3">
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
      <div className="search flex items-center border border-solid border-gray-300 bg-neutral-300 rounded-md p-1 max-w-xs font-inter">
        <img src={Search} alt="Search bar" className="w-4 h-4 mr-1" />
        <input
          type="search"
          name="search"
          placeholder="Search devices..."
          className="bg-neutral-300 text-white px-1 py-0.5 outline-none flex-1 rounded-md text-sm"
        />
      </div>

      <div className="cart flex items-center space-x-2 font-inter font-normal text-sm">
        <img src={Cart} alt="Cart icon" className="w-6 h-6" />
        <p className="mr-2">Cart</p>
        <img src={ICON} alt="Customer image" className="w-8 h-8" />
        <p className="ml-2">Hi, Blessing</p>
      </div>
    </div>
  );
};

export default Header;
