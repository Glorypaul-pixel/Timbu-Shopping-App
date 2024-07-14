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

      <div className="flex justify-between">
        <div className="w-3/4">
          <div className="my-cart flex justify-between items-center my-4 cursor-default">
            <p>My Cart</p>
            <p>{totalQuantity} Items</p>
          </div>
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
                    className="flex flex-col md:flex-row justify-between items-center border-2 px-4 rounded-md py-4 space-y-4 md:space-y-0"
                  >
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-4/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full md:w-40 h-40 object-cover"
                      />
                      <div className="ml-4 text-center md:text-left">
                        <h2 className="text-md font-normal">{product.name}</h2>
                        <p className="text-xl font-medium">₦{product.price}</p>
                      </div>
                    </div>
                    <div className="flex w-2/5 px-1 flex-col justify-between md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-4">
                      <div className="flex w-4/5 items-center justify-center rounded-md flex-col px-2 border-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={() =>
                            updateQuantity(product.id, item.quantity + 1)
                          }
                          className="text-xm md:w-auto"
                        >
                          +
                        </button>
                        <div className="w-1/6">
                          <input
                            type="text"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                              updateQuantity(product.id, e.target.value)
                            }
                            className="md:w-16 mx-1 md:mx-0 border-none outline-none"
                          />
                        </div>

                        <button
                          className="font-bold text-xl flex justify-center items-center"
                          onClick={() =>
                            updateQuantity(product.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </div>
                      <div className="w-4/5">
                        <img
                          src={DeleteIcon}
                          alt="Delete Icon"
                          onClick={() => removeFromCartHandler(product.id)}
                          className=" ml-10 w-6"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="w-1/4 ml-8">
          <div className="bg-gray-100 p-2 rounded shadow flex flex-col justify-end ">
            <h3 className="text-xm font-medium mb-4 mt-6">Order Summary</h3>
            <h2 className="text-xm flex justify-between md:text-sm font-medium">
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
      <div className="pt-10">
        <p className="text-sm mb-2">
          If you have any promotional code, please enter it here:
        </p>
        <div className="flex justify-between  w-1/2  border-2 outline-none ">
          <input
            type="text"
            className="border-none outline-none w-1/2 pl-4"
            placeholder="Enter promotional code"
          />
          <button
            type="submit"
            className="bg-customPurple text-white p-2 "
          >
            Apply Discount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
