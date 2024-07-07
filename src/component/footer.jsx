import IG from "./image/IG.png";
import X from "./image/x_logo.png";
import FB from "./image/fb.png";
import Tele from "./image/telegram.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row justify-between font-inter px-7 py-14 text-sm text-white bg-blackish mt-32 cursor-default">
      <div className="foot-logo mb-8 md:mb-0">
        <h1 className="logo text-customPurple text-2xl font-hanalei">Timbu</h1>
        <p className="mt-4 text-xs">
          We offer the best <br /> smart home <br /> devices for your <br />
          smart home. Join <br /> the world of smart <br /> homes today
        </p>
        <div className="socails flex mt-4 cursor-pointer">
          <img src={IG} alt="IG logo" className="w-5 h-5 mr-2" />
          <img src={X} alt="X logo" className="w-4 h-4 mr-2" />
          <img src={FB} alt="FB logo" className="w-5 h-5 mr-2" />
          <img src={Tele} alt="Telegram logo" className="w-5 h-5" />
        </div>
      </div>
      <div className="help mb-8 md:mb-0">
        <h1 className="font-semibold text-white">Help</h1>
        <ul className="mt-4 text-xs space-y-2">
          <li>Customer Service</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <form className="newsletter">
        <h1 className="font-semibold">Newsletter</h1>
        <p className="mt-4 text-xs">Sign up for our newsletter</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="1"
          className="mt-2 bg-neutral-200 p-2 text-gray-600 resize-none w-full md:w-auto"
        ></textarea>
        <br />
        <button
          type="submit"
          className="mt-2 bg-customPurple text-white rounded-md px-8 py-2 font-medium text-xs text-center hover:bg-opacity-80"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Footer;
