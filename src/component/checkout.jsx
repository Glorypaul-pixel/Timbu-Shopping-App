import { useState } from "react";
// import { useCart } from "./context";
import { Link } from "react-router-dom";
import { products } from "./productList";
import { useSelector, useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../stores/card";
// import { products } from "./productList";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    apartmentSuite: "",
    city: "",
    stateProvince: "",
    country: "",
    phoneNumber: "",
    emailAddress: "",
  });
  
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

 
  return (
    <div className="container mx-auto pt-4 font-inter">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Check-Out Details
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex flex-col">
              <label className="mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Please Enter Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Please Enter Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                placeholder="Address To Be Delivered To"
                value={formData.streetAddress}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Apartment/Suite No</label>
              <input
                type="text"
                name="apartmentSuite"
                placeholder="Apartment To Be Delivered To"
                value={formData.apartmentSuite}
                onChange={handleChange}
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">City</label>
              <input
                type="text"
                name="city"
                placeholder="City To Be Delivered To"
                value={formData.city}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">State/Province</label>
              <input
                type="text"
                name="stateProvince"
                placeholder="State To Be Delivered To"
                value={formData.stateProvince}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country To Be Delivered To"
                value={formData.country}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Number To Be Delivered To"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Example pattern for phone number format
                className="border-2 border-gray-300 p-2 rounded"
              />
              <small className="text-gray-500">Format: 123-456-7890</small>
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                placeholder="Email To Be Delivered To"
                value={formData.emailAddress}
                onChange={handleChange}
                required
                className="border-2 border-gray-300 p-2 rounded"
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4 order">Order Summary</h3>
          <div className="p-6">
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
                    <div key={index} className="border-b p-4">
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-40 h-40 object-cover pb-2"
                        />
                        <div className="ml-4">
                          <h2 className="text-lg font-medium">
                            {product.name}
                          </h2>
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
                          onChange={(e) =>
                            updateQuantity(product.id, e.target.value)
                          }
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
                  <h2 className="text-xl font-bold">
                    Total: ₦{getTotalPrice()}
                  </h2>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/payment"
            className="bg-customPurple text-white w-full p-2 rounded mt-4 flex justify-center items-center"
          >
            Make Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
