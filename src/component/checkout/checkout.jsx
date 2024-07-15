import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../productList";
import { useSelector } from "react-redux";
import "./checkout.css";

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

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const carts = useSelector((store) => store.cart.items);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
    setFormSubmitted(true);
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  return (
    <div className="checkout p-4 md:p-8">
      
      <p className="text-sm my-12 font-inter text-gray-500 font-medium text-center cursor-default">
        Home{" "}
        <span className="text-customPurple">
          {">>"} Cart {">>"} Checkout
        </span>
      </p>
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Check-Out Details
      </h1>
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button
                type="submit"
                className="bg-customPurple text-white p-2 rounded mt-4 flex justify-center items-center"
                disabled={!isFormValid}
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="response-container">
              <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
              <p>
                {" "}
                {formData.firstName} {formData.lastName}
              </p>
              <p>{formData.apartmentSuite}</p>
              <p> {formData.stateProvince}</p>
              <p> {formData.country}</p>
              <p>{formData.phoneNumber}</p>
              <p> {formData.emailAddress}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/3">
          <div className="p-4 bg-gray-100 w-full rounded shadow">
            <h3 className="text-xl font-bold mb-4 text-center">
              Order Summary
            </h3>
            <div className="">
              {carts.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {carts.map((item, index) => {
                    const product = products.find(
                      (product) => product.id === item.productId
                    );
                    if (!product) return null;
                    return (
                      <div key={index} className="border-b p-1">
                        <div className="flex items-center">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover pb-2"
                          />
                          <div className="ml-4">
                            <h2 className="text-sm font-semibold">
                              {product.name}
                              {totalQuantity}
                            </h2>
                            <p className="text-xs">₦{product.price}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">
                      Total: ₦{getTotalPrice()}
                    </h2>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/paymentMethod"
              className={`bg-customPurple text-white p-2 rounded mt-4 flex justify-center items-center ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={(e) => !isFormValid && e.preventDefault()}
            >
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
