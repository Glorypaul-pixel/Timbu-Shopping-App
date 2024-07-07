import { useParams } from "react-router-dom";
const products = [
  { id: 1, name: "Samsung QLED Smart TV", image: "./image/tv4.png", price: 362485, description: "Built-in internet connectivity, voice control and smart home integration" },
  { id: 2, name: "Amazon Echo Smart Speaker", image: "./image/speaker2.png", price: 288550, description: "Voice-control integrated with Alexa for playing music and controlling devices." },
  { id: 3, name: "Apple HomePod Mini", image: "./image/speaker1.png", price: 500550, description: "Integrates seamlessly with Apple devices and offers Siri voice for smart home management." },
  { id: 4, name: "Apple TV 4K Smart TV", image: "./image/tv3.png", price: 1500550, description: "Supports 4k HDR and Dolby Vision. Offers access to other streaming services and Siri voice control." },
  { id: 5, name: "Bose Smart Soundbar 700", image: "./image/tv2.png", price: 100550, description: "Offers immersive sound control, works with Alexa and Google Assistant with Wi-Fi and Bluetooth." },
  { id: 6, name: "Epson Home Cinema 5050UB", image: "./image/tv1.png", price: 500550, description: "Offers 4k PRO-UHD picture quality. Features advanced image processing and flexible installation options." },
  { id: 7, name: "Play Station 5", image: "./image/game2.png", price: 800720, description: "Offering powerful performance with a custom SSD, ray tracing, and 4K gaming capabilities." },
  { id: 8, name: "Xbox Series X", image: "./image/game1.png", price: 1500550, description: "Microsoft's most powerful console, providing 4K gaming and up to 120 FPS." },
  { id: 9, name: "Logitech Harmony Elite", image: "./image/mouse.png", price: 50000, description: "A powerful universal remote that can control all your entertainment devices and smart home gadgets." },
];

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h3>₦{product.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
