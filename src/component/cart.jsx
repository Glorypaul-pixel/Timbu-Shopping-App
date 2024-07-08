import { Link } from "react-router-dom";
import { useCart } from "./context";
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

const cartItems = [
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

const Cart = () => {
  const {updateQuantity, removeFromCart, getTotalPrice } =
    useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-sm">{item.description}</p>
                  <p>₦{item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Add
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  className="w-16 p-1 border rounded mx-4"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total: ₦{getTotalPrice()}</h2>
            <Link
              to="/checkout"
              className="bg-customPurple text-white px-6 py-2 rounded"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
