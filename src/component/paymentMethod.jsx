import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { products } from "./productList";
// import DeleteIcon from "../path/to/DeleteIcon"; // Update this with the actual path to your delete icon

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  //   const navigate = useNavigate();

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
      <div className="flex justify-between">
        <div className="mt-8">
          <h1 className="mb-4">Choose a payment method</h1>
          <ul>
            {paymentMethods.map((method, index) => (
              <li key={index} className="mb-4">
                <label>
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
        <div className="bg-gray-100 p-2 rounded shadow ">
          <div className="">
            <h3 className="text-xl font-bold mb-4 text-center">
              Order Summary
            </h3>

            {carts.length === 0 ? (
              <p>Your cart is empty.</p>
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
                      className="border-2 w-full px-4 rounded-md py-4 space-y-4 md:space-y-0"
                    >
                      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full md:w-40 h-40 object-cover"
                        />
                        <div className="text-center md:text-left">
                          <h2 className="text-xm font-normal">
                            {product.name}
                          </h2>
                          
                        </div>
                        <p className="text-sm font-semibold">
                            ₦{product.price}
                          </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="">
            <div className="">
              <h3 className="text-xm font-medium mb-4 mt-6">Order Summary</h3>
              <h2 className="text-xm flex justify-between md:text-sm font-medium">
                Total: <span>₦{getTotalPrice()}</span>
              </h2>
              <Link
                to="/payment"
                state={{ method: selectedMethod }}
                className={`bg-customPurple text-white p-2 rounded mt-4 flex justify-center items-center ${
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
    </div>
  );
};

export default PaymentMethod;
