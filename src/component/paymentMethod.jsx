import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { products } from "./productList";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const paymentMethods = [
    "Credit/Debit Card",
    "Bank Transfer",
    "PayPal",
    "Paystack",
  ];

  const handleSelection = (method) => {
    setSelectedMethod(method);
    setIsFormValid(true);
  };

  const carts = useSelector((store) => store.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const getTotalPrice = () => {
    return carts.reduce((total, item) => {
      const product = products.find((product) => product.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <div className="p-6 font-inter">
      <p className="text-sm my-16 font-inter text-gray-500 font-medium text-center cursor-default">
        Home{" "}
        <span className="text-customPurple">
          {">>"} Cart {">>"} Checkout
        </span>
      </p>
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-2xl font-semibold">Choose a payment method</h1>
          <ul>
            {paymentMethods.map((method, index) => (
              <li key={index} className="mb-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    onChange={() => handleSelection(method)}
                    className="mr-2"
                  />
                  {method}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 bg-gray-100 p-4 rounded shadow">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 text-center md:text-left">Order Summary</h3>
            {carts.length === 0 ? (
              <p className="text-center md:text-left">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {carts.map((item, index) => {
                  const product = products.find(
                    (product) => product.id === item.productId
                  );
                  if (!product) return null;

                  return (
                    <div
                      key={index}
                      className="border-2 w-full px-4 rounded-md py-4 space-y-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 object-cover"
                        />
                        <div className="flex-1">
                          <h2 className="text-sm font-semibold">{product.name}</h2>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          <p className="text-sm font-semibold">₦{product.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2 mt-4">Order Total</h3>
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Total:</h2>
              <span className="text-lg font-medium">₦{getTotalPrice()}</span>
            </div>
            <Link
              to={isFormValid ? "/payment" : "#"}
              state={{ method: selectedMethod }}
              className={`block bg-customPurple text-white mt-4 py-2 px-4 rounded text-center ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={(e) => !isFormValid && e.preventDefault()}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
