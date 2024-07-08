import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import { CartProvider } from "./component/context";
import Advert from "./component/advert/advert";
import Product from "./component/product";
import ProductDetail from "./component/productDetail";
import Footer from "./component/footer";
import Payment from "./component/payment";
import CartPage from "./component/cart";
import Checkout from "./component/checkout";

function App() {
  const addToCartAndNavigate = (product) => {
    // Perform addToCart functionality (not shown here, should be done through context)
    // For demonstration, simulate adding to cart and navigating to cart page
    console.log(`Added ${product.name} to cart.`);
    // Navigate to cart page
    window.location.href = "/cart";
  };

  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Advert />
          <Routes>
            <Route path="/" element={<Product />} />
            {/* Pass addToCartAndNavigate function to ProductDetail */}
            <Route
              path="/product/:productId"
              element={
                <ProductDetail addToCartAndNavigate={addToCartAndNavigate} />
              }
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
