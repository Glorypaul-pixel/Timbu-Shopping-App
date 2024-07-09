import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { products } from "./productList";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/card";

const CartItem = (props) => {
  console.log("CartItem props:", props);
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
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
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
    <div className="div">
      <h4>{productDetail.name}</h4>
      <p>{productDetail.description}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ₦{productDetail.price * quantity}</p>
      <div className="flex">
        <button
          className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span className="bg-gray-400 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
          {quantity}
        </span>
        <button
          className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
          onClick={handlePlusQuantity}
        >
          +
        </button>
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
