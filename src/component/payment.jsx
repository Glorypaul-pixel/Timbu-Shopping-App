const Payment = () => {
  return (
    <div className="container mx-auto p-6 font-inter">
      <h1 className="text-2xl font-semibold mb-6 text-center">Payment Page</h1>
      <form className="space-y-4 max-w-md mx-auto">
        <div className="flex flex-col">
          <label htmlFor="cardNumber" className="mb-1">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-customPurple"
          />
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
            className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-customPurple"
          />
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
            className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-customPurple"
          />
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
            className="border-2 border-gray-300 p-2 rounded focus:outline-none focus:border-customPurple"
          />
        </div>
        <button
          type="submit"
          className="bg-customPurple text-white w-full p-2 rounded mt-4"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
