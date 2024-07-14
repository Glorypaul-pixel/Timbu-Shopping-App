import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../stores/card";
import { products } from "./productList";
import DeleteIcon from "./image/trash-bin.png";

const Cart = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    dispatch(changeQuantity({ productId, quantity: Number(quantity) }));
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const getTotalPrice = () => {
    return carts.reduce((total, item) => {
      const product = products.find((product) => product.id === item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  return (
    <div className="p-6 font-inter">
      <p className="text-sm my-16 font-inter text-gray-500 font-medium text-center cursor-default">
        Home <span className="text-customPurple">{">>"} Cart</span>
      </p>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-3/4">
          <div className="my-cart flex justify-between items-center my-4 cursor-default">
            <p className="text-lg font-semibold">My Cart</p>
            <p>{totalQuantity} Items</p>
          </div>
          {carts.length === 0 ? (
            <p className="text-lg">Your cart is empty.</p>
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
                    className="flex flex-col md:flex-row justify-between items-center border-2 px-4 rounded-md py-4 space-y-4 md:space-y-0 md:space-x-4"
                  >
                    <div className="flex items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-3/4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full md:w-40 h-40 object-cover"
                      />
                      <div className="ml-4 text-center md:text-left">
                        <h2 className="text-lg font-normal">{product.name}</h2>
                        <p className="text-xl font-medium">₦{product.price}</p>
                      </div>
                    </div>
                    <div className="flex w-full md:w-1/4 justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                      <div className="flex items-center justify-center w-full md:w-3/4 border-2 rounded-md md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, item.quantity + 1)
                          }
                          className="text-xl md:text-base"
                        >
                          +
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          min="1"
                          onChange={(e) =>
                            updateQuantity(product.id, e.target.value)
                          }
                          className="w-1/6 text-center border-2 rounded-md md:w-16 md:mx-1 outline-none"
                        />
                        <button
                          className="text-xl md:text-base font-bold flex justify-center items-center"
                          onClick={() =>
                            updateQuantity(product.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </div>
                      <div className="w-1/4">
                        <img
                          src={DeleteIcon}
                          alt="Delete Icon"
                          onClick={() => removeFromCartHandler(product.id)}
                          className="w-6 ml-4 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="w-full md:w-1/4 mt-8 md:mt-0 md:ml-8">
          <div className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-lg font-medium mb-4 mt-6">Order Summary</h3>
            <h2 className="text-lg flex justify-between font-medium">
              Total: <span>₦{getTotalPrice()}</span>
            </h2>
            <Link
              to="/checkout"
              className="bg-customPurple text-white p-2 rounded mt-4 flex justify-center items-center"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
