import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const ThankYouPage = () => {
  //   const { items, total } = order;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-16">
        <h1 className="text-3xl font-bold text-center text-customPurple mb-6">
          Thank You for Your Purchase!
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Your order has been placed successfully. A confirmation email has been
          sent to your email address.
        </p>
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
