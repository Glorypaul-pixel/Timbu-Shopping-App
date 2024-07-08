import { Link, useParams } from "react-router-dom";
import { useCart } from "./context";
import PropTypes from "prop-types";
import CCTV from "./image/cctv.jpg";
import Fridge from "./image/fridge.jpg";
import Oven from "./image/oven.jpg";
import Nest from "./image/nest.jpg";
import Ecobee from "./image/ecobee.jpg";
import PotWifi from "./image/pot-wifi.jpg";
import HueBulb from "./image/hue-bulb.jpg";
import QLED from "./image/tv4.jpg";
import AppleTv from "./image/tv3.jpg";
import PlayStation from "./image/game2.jpg";
import Xbox from "./image/game1.jpg";
import Elite from "./image/mouse.jpg";

const products = [
  {
    id: 1,
    name: "Samsung QLED Smart TV",
    image: QLED,
    price: 362485,
    description:
      "Built-in internet connectivity, voice control and smart home integration with our smart TV",
  },
  {
    id: 2,
    name: "Ario Pro 4 Spotlight Camera",
    image: CCTV,
    price: 362485,
    description:
      "Wireless security camera with 2K HDR video, color night vision, and a built-in spotlight.",
  },
  {
    id: 3,
    name: "Samsung Family Refrigerator",
    image: Fridge,
    price: 600000,
    description:
      "High-tech refrigerator with a built-in touchscreen, manage groceries, stream music, and control devices",
  },
  {
    id: 4,
    name: "Breville Smart Oven Air",
    image: Oven,
    price: 500550,
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

const ProductDetail = ({ addToCartAndNavigate }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    addToCartAndNavigate(product); // Navigate to the cart page after adding to cart
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-20 h-20" />
      <p>{product.description}</p>
      <h3>₦{product.price}</h3>
      <button
        onClick={handleAddToCart}
        className="bg-customPurple text-white px-6 py-2 rounded"
      >
        Add to Cart
      </button>

      <Link to="/payment" className="ml-4">
        Proceed to Payment
      </Link>
    </div>
  );
};
ProductDetail.propTypes = {
  addToCartAndNavigate: PropTypes.func.isRequired,
};

export default ProductDetail;
