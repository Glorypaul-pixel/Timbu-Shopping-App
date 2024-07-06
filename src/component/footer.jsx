import IG from "./image/IG.png";
import X from "./image/x_logo.png";
import FB from "./image/fb.png";
import Tele from "./image/telegram.png";
const footer = () => {
  return (
    <div className="footer">
      <div className="foot-logo">
        <h1 className="logo">AceHub</h1>
        <p>
          We offer the best <br /> smart home <br /> devies for your <br />{" "}
          smart home. Join <br /> the world of smart <br /> homes today
        </p>
        <div className="socails">
          <img src={IG} alt="IG logo" />
          <img src={X} alt="X logo" />
          <img src={FB} alt="FB logo" />
          <img src={Tele} alt="Telegram logo" />
        </div>
      </div>
      <div className="help">
        <h1>Help</h1>
        <ul>
          <li>Customer Service</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <form action="">
        <h1>Newsletter</h1>
        <p>Sign up for our newsletter</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default footer;
