import { useState } from "react";
// import { useCart } from "./context";
import { Link } from "react-router-dom";
import { products } from "./productList";

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

  // const { getTotalPrice } = useCart();
  // const history = useHistory(); // Get history from react-router-dom

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

  // const subTotal = getTotalPrice();
  // const discount = subTotal > 100000 ? subTotal * 0.1 : 0; // Example discount rule
  // const deliveryFee = 5000; // Fixed delivery fee
  // const total = subTotal - discount + deliveryFee;

  return (
    <div className="container mx-auto p-6 font-inter">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Check-Out Details
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
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
            <button
              type="submit"
              className="bg-customPurple text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-2">
            {products.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>₦{item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Sub-total</span>
              {/* <span>₦{subTotal}</span> */}
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              {/* <span>-₦{discount}</span> */}
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              {/* <span>₦{deliveryFee}</span> */}
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              {/* <span>₦{total}</span> */}
            </div>
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
