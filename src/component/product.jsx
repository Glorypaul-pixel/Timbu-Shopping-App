import { Link } from "react-router-dom";
import CCTV from "./image/cctv.png";
import Fridge from "./image/fridge.png";
import Oven from "./image/oven.png";
import Nest from "./image/nest.png";
import Ecobee from "./image/ecobee.png";
import PotWifi from "./image/pot-wifi.png";
import HueBulb from "./image/hue-bulb.png";
import QLED from "./image/tv4.png";
import Cart from "./image/cart-plus.png";
import AppleTv from "./image/tv3.png";
import PlayStation from "./image/game2.png";
import Xbox from "./image/game1.png";
import Elite from "./image/mouse.png";

const products = [
  {
    id: 1,
    name: "Samsung QLED Smart TV",
    image: QLED,
    price: 362485,
    description:
      "Built-in internet connectivity, voice control and smart home integration",
  },
  {
    id: 2,
    name: "Ario Pro 4 Spotlight Camera",
    image: CCTV,
    Price: 362485,
    description:
      "Wireless security camera with 2K HDR video, color night vision, and a built-in spotlight.",
  },
  {
    id: 3,
    name: "Samsung Family Refrigerator",
    image: Fridge,
    Price: 600000,
    description:
      "High-tech refrigerator with a built-in touchscreen, manage groceries, stream music, and control devices",
  },

  {
    id: 4,
    name: "Breville Smart Oven Air",
    image: Oven,
    Price: 500550,
    description:
      "A countertop oven with multiple cooking functions, including air frying, with smart presets for easy use.",
  },

  {
    id: 5,
    name: "Apple TV 4K Smart TV",
    image: AppleTv,
    price: 1500550,
    description:
      "Supports 4k HDR and Dolby Vision. Offers access to other streaming services and Siri voice control.",
  },

  {
    id: 6,
    name: "Nest Learning Thermometer",
    image: Nest,
    price: 1500550,
    description:
      "Learns your schedule and preferences, optimizing energy usage and providing remote control.",
  },
  {
    id: 7,
    name: "Ecobee Smart Thermostat",
    image: Ecobee,
    price: 100550,
    description:
      "Built-in Alexa, allowing you to control temperature and other smart devices using voice commands.",
  },
  {
    id: 8,
    name: "Instant Smart Pot Wifi",
    image: PotWifi,
    price: 250000,
    description:
      "A multi-functional pressure cooker with Wi-Fi connectivity for remote control and monitoring.",
  },

  {
    id: 9,
    name: "Play Station 5",
    image: PlayStation,
    price: 800720,
    description:
      "Offering powerful performance with a custom SSD, ray tracing, and 4K gaming capabilities.",
  },
  {
    id: 10,
    name: "Philips Smart Hue Bulb",
    image: HueBulb,
    price: 20000,
    description:
      "Controlled via app or voice, with customizable colors and brightness levels.",
  },
  {
    id: 11,
    name: "Xbox Series X",
    image: Xbox,
    price: 1500550,
    description:
      "Microsoft's most powerful console, providing 4K gaming and up to 120 FPS.",
  },
  {
    id: 12,
    name: "Logitech Harmony Elite",
    image: Elite,
    price: 50000,
    description:
      "A powerful universal remote that can control all your entertainment devices and smart home gadgets.",
  },
];

const Product = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="categories">
        <h1>Categories</h1>
        {/* <ul>
          <li>Security Systems</li>
          <li>Smart Lighting</li>
          <li>Smart Thermostats</li>
          <li>Smart Appliances</li>
          <li>Home Entertainment</li>
          <li>Smart Home Hubs</li>
          <li>Smart Plugs</li>
          <li>Smart Sensors</li>
        </ul> */}
      </div>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
            </Link>
            <span>(1,200 reviews)</span>
            <p>{product.description}</p>
            <div className="add-cart">
              <h3>₦{product.price}</h3>
              <div className="butt">
                <img src={Cart} alt="cart" />
                <h5>Add to cart</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
