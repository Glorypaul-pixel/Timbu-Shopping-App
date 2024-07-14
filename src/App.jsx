import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import "./index.css";
import Advert from "./component/advert/advert";
import Product from "./component/product";
import ProductDetail from "./component/productDetail";
import Footer from "./component/footer";
import Payment from "./component/payment";
import CartPage from "./component/cart";
import CartItem from "./component/cartItem";
import Checkout from "./component/checkout/checkout";
import ProductCard from "./component/productCard";
import ThankYouPage from "./component/thankYou";
import PaymentMethods from "./component/paymentMethod";

function App() {
  const sampleOrder = {
    items: [
      {
        name: "Product 1",
        price: 2000,
        quantity: 1,
        image: "path/to/product1.jpg",
      },
      {
        name: "Product 2",
        price: 3000,
        quantity: 2,
        image: "path/to/product2.jpg",
      },
    ],
    total: 8000,
  };

  return (
    <Router>
      <Header />
      <Advert />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/paymentMethod" element={<PaymentMethods />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cartItem" element={<CartItem />} />
        <Route
          path="/thankYou"
          element={<ThankYouPage order={sampleOrder} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
