// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./component/header";
// import Advert from "./component/advert/advert";
// import Product from "./component/product";
// import ProductDetail from "./component/productDetail";
// import Footer from "./component/footer";
// import Payment from "./component/payment"; // Import the new Payment component

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <Advert />
//         <Routes>
//           <Route path="/" element={<Product />} />
//           <Route path="/product/:productId" element={<ProductDetail />} />
//           <Route path="/payment" element={<Payment />} /> {/* Add this line */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Advert from "./component/advert/advert";
import Product from "./component/product";
import ProductDetail from "./component/productDetail";
import Footer from "./component/footer";
import Payment from "./component/payment"; // Import the new Payment component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Advert />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/shop" element={<Product />} />{" "}
          {/* Ensure this route exists */}
          <Route path="/payment" element={<Payment />} /> {/* Add this line */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
