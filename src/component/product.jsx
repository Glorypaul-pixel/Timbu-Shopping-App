import { Link } from "react-router-dom";
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

const products = [
  { id: 1, name: "Samsung QLED Smart TV", image: QLED, price: 362485, description: "Built-in internet connectivity, voice control and smart home integration" },
  { id: 2, name: "Amazon Echo Smart Speaker", image: Echo, price: 288550, description: "Voice-control integrated with Alexa for playing music and controlling devices." },
  { id: 3, name: "Apple HomePod Mini", image: Mini, price: 500550, description: "Integrates seamlessly with Apple devices and offers Siri voice for smart home management." },
  { id: 4, name: "Apple TV 4K Smart TV", image: AppleTv, price: 1500550, description: "Supports 4k HDR and Dolby Vision. Offers access to other streaming services and Siri voice control." },
  { id: 5, name: "Bose Smart Soundbar 700", image: Bose, price: 100550, description: "Offers immersive sound control, works with Alexa and Google Assistant with Wi-Fi and Bluetooth." },
  { id: 6, name: "Epson Home Cinema 5050UB", image: Epson, price: 500550, description: "Offers 4k PRO-UHD picture quality. Features advanced image processing and flexible installation options." },
  { id: 7, name: "Play Station 5", image: PlayStation, price: 800720, description: "Offering powerful performance with a custom SSD, ray tracing, and 4K gaming capabilities." },
  { id: 8, name: "Xbox Series X", image: Xbox, price: 1500550, description: "Microsoft's most powerful console, providing 4K gaming and up to 120 FPS." },
  { id: 9, name: "Logitech Harmony Elite", image: Elite, price: 50000, description: "A powerful universal remote that can control all your entertainment devices and smart home gadgets." },
];

const Product = () => {
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
