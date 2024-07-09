import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    const cardNumberRegex = /^[0-9]{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    const cvvRegex = /^[0-9]{3}$/;

    if (!cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits";
    }
    if (!expiryDateRegex.test(formData.expiryDate)) {
      errors.expiryDate = "Expiry date must be in MM/YY format";
    }
    if (!cvvRegex.test(formData.cvv)) {
      errors.cvv = "CVV must be 3 digits";
    }
    if (formData.name.trim() === "") {
      errors.name = "Name on card is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/thankyou");
    }
  };

  return (
    <div className="container mx-auto p-6 font-inter">
      <h1 className="text-2xl font-semibold mb-6 text-center">Payment Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div className="flex flex-col">
          <label htmlFor="cardNumber" className="mb-1">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleChange}
            className={`border-2 p-2 rounded focus:outline-none focus:border-customPurple ${
              errors.cardNumber ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.cardNumber && (
            <span className="text-red-500 text-sm">{errors.cardNumber}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="expiryDate" className="mb-1">
            Expiry Date:
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleChange}
            className={`border-2 p-2 rounded focus:outline-none focus:border-customPurple ${
              errors.expiryDate ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.expiryDate && (
            <span className="text-red-500 text-sm">{errors.expiryDate}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="cvv" className="mb-1">
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            value={formData.cvv}
            onChange={handleChange}
            className={`border-2 p-2 rounded focus:outline-none focus:border-customPurple ${
              errors.cvv ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.cvv && (
            <span className="text-red-500 text-sm">{errors.cvv}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">
            Name on Card:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`border-2 p-2 rounded focus:outline-none focus:border-customPurple ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-customPurple text-white w-full p-2 rounded mt-4 flex justify-center items-center"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
