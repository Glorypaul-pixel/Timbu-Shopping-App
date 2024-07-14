import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-12 lg:w-1/2 w-full text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-customPurple mb-6">
          Thank You for Shopping with Us
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-8">
          Your order has been received and is being processed. You will receive
          an email notification with your order details.
        </p>
        <Link
          to="/"
          className="bg-customPurple text-white p-2 md:p-3 rounded mt-4 flex justify-center items-center"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

ThankYouPage.propTypes = {
  order: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default ThankYouPage;
