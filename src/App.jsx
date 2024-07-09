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
import Checkout from "./component/checkout";
import ProductCard from "./component/productCard";

function App() {
  return (
    <Router>
      <Header />
      <Advert />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cartItem" element={<CartItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
