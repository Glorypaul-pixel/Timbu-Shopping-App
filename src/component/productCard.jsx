import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Cart from "./image/cart-plus.png";
import Star from "./image/Star.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/card";

const ProductCard = (props) => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const { id, name, price, image, description} = props.data;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
    navigate("/cart");
  };
  return (
    <div>
      <div key={id} className="product-item bg-white rounded-md p-4 shadow-md">
        {/* <Link to={`/product/${slug}`} className="block"> */}
          <img src={image} alt="" className="w-full h-auto max-w-full" />
          <h4 className="mt-2 font-bold">{name}</h4>
        {/* </Link> */}
        <span className=" text-xs text-gray-600 font-semibold flex justify-between items-center">
          <img src={Star} alt="" className="w-20" />
          (1,200 reviews)
        </span>
        <p className="mt-1 text-sm text-gray-600 font-semibold">
          {description}
        </p>
        <div className="add-cart flex items-center justify-between mt-2">
          <h3 className="text-gray-900 font-semibold">
            ₦<span>{price}</span>
          </h3>
          <button
            className="butt flex items-center bg-customPurple rounded-md text-white p-2 ml-2"
            onClick={handleAddToCart}
          >
            <img src={Cart} alt="cart" className="w-4 h-4 mr-1" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
