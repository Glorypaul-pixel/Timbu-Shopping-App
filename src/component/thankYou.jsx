import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const ThankYouPage = () => {
  //   const { items, total } = order;

  return (
    <div className="container mx-auto p-4 ">
      <div className=" m-40 md:p-16">
        <h1 className="text-xl font-semibold text-center text-customPurple mb-6">
          Thank You for Shopping with Us
        </h1>
        <p className="text-sm text-gray-700 mb-8">
          Your order has been recieved and is being processed. You will receive
          an email notification with your order details.
        </p>
        <Link
          to="/"
          className="bg-customPurple text-white p-2 rounded mt-4 flex justify-center items-center"
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
