import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { products } from "./productList";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/card";

const CartItem = (props) => {
  const { productId, quantity } = props.data || {};
  const [productDetail, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId !== undefined) {
      const findDetail = products.find((product) => product.id === productId);
      setDetail(findDetail);
    }
  }, [productId]);

  if (!productDetail) {
    return null;
  }

  const handleMinusQuantity = () => {
    if (quantity > 1) {
      dispatch(
        changeQuantity({
          productId: productId,
          quantity: quantity - 1,
        })
      );
    }
  };

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="p-4 md:p-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div className="md:w-1/4">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="w-full h-auto md:w-20 md:h-20 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-3/4">
          <h4 className="text-lg font-semibold">{productDetail.name}</h4>
          <p className="text-sm text-gray-600 mb-2">{productDetail.description}</p>
          <div className="flex items-center space-x-2 mb-2">
            <button
              className="bg-gray-100 h-10 w-10 md:w-8 md:h-8 text-lg md:text-base font-bold rounded-lg flex justify-center items-center"
              onClick={handleMinusQuantity}
            >
              -
            </button>
            <span className="bg-gray-200 h-10 w-10 md:w-8 md:h-8 text-lg md:text-base font-bold rounded-lg flex justify-center items-center">
              {quantity}
            </span>
            <button
              className="bg-gray-100 h-10 w-10 md:w-8 md:h-8 text-lg md:text-base font-bold rounded-lg flex justify-center items-center"
              onClick={handlePlusQuantity}
            >
              +
            </button>
          </div>
          <p className="text-lg font-medium">Price: ₦{productDetail.price * quantity}</p>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    productId: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

CartItem.defaultProps = {
  data: {
    productId: 0,
    quantity: 1,
  },
};

export default CartItem;
