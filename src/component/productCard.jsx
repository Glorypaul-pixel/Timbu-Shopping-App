import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Cart from "./image/cart-plus.png";
import Star from "./image/Star.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/card";
import { fetchProducts } from "../stores/api";

const ProductCard = (props) => {
  const loadProducts = async () => {
    await fetchProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const carts = useSelector((store) => store.cart.items);
  console.log(carts);

  const { id, name, price, image, description } = props.data;
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
    <div className="p-4">
      <div key={id} className="product-item bg-white p-4 rounded-lg shadow-md">
        <img src={image} alt={name} className="w-full h-auto max-w-full rounded-lg" />
        <h4 className="my-2 font-bold text-lg text-center">{name}</h4>
        <span className="text-xs text-gray-600 font-semibold flex items-center justify-center mb-2">
          <img src={Star} alt="Star" className="w-4 h-4 mr-1" />
          (1,200 reviews)
        </span>
        <p className="mt-1 text-sm text-gray-600 font-medium leading-6 text-center">
          {description}
        </p>
        <div className="add-cart flex items-center justify-between mt-2">
          <h3 className="text-gray-900 font-medium">
            ₦<span>{price}</span>
          </h3>
          <button
            className="butt flex items-center text-xs font-medium bg-customPurple rounded-md text-white p-2 ml-2"
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
