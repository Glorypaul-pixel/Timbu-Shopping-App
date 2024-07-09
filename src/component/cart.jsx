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
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-medium">{product.name}</h2>
                    <p className="text-sm">{product.description}</p>
                    <p>₦{product.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateQuantity(product.id, item.quantity + 1)
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Add
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(product.id, e.target.value)}
                    className="w-16 p-1 border rounded mx-4"
                  />
                  <button
                    onClick={() => removeFromCartHandler(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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
