import QLED from "./image/tv4.png";
import Echo from "./image/speaker2.png";
import Mini from "./image/speaker1.png";
import Cart from "./image/cart-plus.png";
import AppleTv from "./image/tv3.png";
import Bose from "./image/tv2.png";
import Epson from "./image/tv1.png";
import PlayStation from "./image/game2.png";
import Xbox from "./image/game1.png";
import Elite from "./image/mouse.png";
const product = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="categories">
        <h1>Categories</h1>
        <ul>
          <li>Security Systems</li>
          <li>Smart Lighting</li>
          <li>Smart Thermostats</li>
          <li>Smart Appliances</li>
          <li>Home Entertainment</li>
          <li>Smart Home Hubs</li>
          <li>Smart Plugs</li>
          <li>Smart Sensors</li>
        </ul>
      </div>
      <div className="products">
        <div className="product-1">
          <div className="row1">
            <img src={QLED} alt="QLED Tv " />
            <h4>Samsung QLED Smart TV</h4>
            <span>(1,200 reviews)</span>
            <p>
              Buit-in internet connectivity, voice control and smart home
              integration
            </p>
            <div className="add-cart">
              <h3>₦362,485</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
          <div className="row1">
            <img src={Echo} alt="Smart Speaker" />
            <h4>Amazon Echo Smart Speaker</h4>
            <span>(1,200 reviews)</span>
            <p>
              Voice-control integrated with Alexa for playing music and
              controlling devices.
            </p>
            <div className="add-cart">
              <h3>₦288,550</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
          <div className="row1">
            <img src={Mini} alt="Homepod Mini" />
            <h4>Apple HomePod Mini</h4>
            <span>(1,200 reviews)</span>
            <p>
              Integrates seamlessly with Apple devices and offers Siri voice:
              for smart home management.
            </p>
            <div className="add-cart">
              <h3>₦500,550</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="product-2">
          <div className="row2">
            <img src={AppleTv} alt="Apple Tv" />
            <h4>Apple TV 4K Smart TV</h4>
            <span>(3,200 reviews)</span>
            <p>
              Supports 4k HDR and Dobly Vision. Offers access to other streaming
              services and siri voice control
            </p>
            <div className="add-cart">
              <h3>₦1,500,550</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
          <div className="row2">
            <img src={Bose} alt="Bose" />
            <h4>Bose Smart Soundbar 700</h4>
            <span>(3,200 reviews)</span>
            <p>
              Offers immersive sound control, works with Alexa and Google
              Assistant with Wi-Fi and bluetooth
            </p>
            <div className="add-cart">
              <h3>₦100,550</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
          <div className="row2">
            <img src={Epson} alt="Epson" />
            <h4>Epson Home Cinema 5050UB</h4>
            <span>(3,200 reviews)</span>
            <p>
              Offers 4k PRO-UHD picture quality. Features advanced image
              processing and flexible installation options.
            </p>
            <div className="add-cart">
              <h3>₦500,550</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="product-3">
          <div className="row3">
            <img src={PlayStation} alt="Play Station" />
            <h4>Play Station 5</h4>
            <span>(3,200 reviews)</span>
            <p>
              Offering powerful performance with a custom SSD, ray tracing, and
              4K gaming capabilities
            </p>
            <div className="add-cart">
              <h3>₦800,720</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
          <div className="row3">
            <img src={Xbox} alt="Xbox Series" />
            <h4>Xbox Series X</h4>
            <span>(3,200 reviews)</span>
            <p>
              Microsofts most powerful console, providing 4K gaming and up to
              120 FPS.
            </p>
            <div className="add-cart">
              <h3>₦1,500,550</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
          <div className="row3">
            <img src={Elite} alt="" />
            <h4>Logitech Harmony Elite</h4>
            <span>(3,200 reviews)</span>
            <p>
              A powerful universal remote that can control all your
              entertainment devices and smart home gadgets.
            </p>
            <div className="add-cart">
              <h3>₦50,000</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
