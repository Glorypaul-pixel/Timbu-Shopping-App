import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../stores/card";
import { products } from "./productList";

const Cart = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const updateQuantity = (productId, quantity) => {
    dispatch(changeQuantity({ productId, quantity: Number(quantity) }));
  };

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h1>
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
                className="flex flex-col md:flex-row justify-between items-center border-b py-4 space-y-4 md:space-y-0"
              >
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-40 h-40 object-cover"
                  />
                  <div className="ml-4 text-center md:text-left">
                    <h2 className="text-md font-semibold">{product.name}</h2>
                    {/* <p className="text-sm">{product.description}</p> */}
                    <p className="text-sm font-semibold">₦{product.price}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <button
                    onClick={() =>
                      updateQuantity(product.id, item.quantity + 1)
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded w-full md:w-auto"
                  >
                    Add
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(product.id, e.target.value)}
                    className="w-full md:w-16 p-1 border rounded mx-4 md:mx-0"
                  />
                  <button
                    onClick={() => removeFromCartHandler(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded w-full md:w-auto"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">Total: ₦{getTotalPrice()}</h2>
            <Link
              to="/checkout"
              className="bg-customPurple text-white px-6 py-2 rounded"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
