import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "./productList";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/card";

const ProductDetail = () => {
  const { slug} = useParams();
  const [productDetail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.filter(product => product.slug === `/productDetail/${slug}`);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [slug]);
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: productDetail.id,
        quantity: quantity,
      })
    );
  };
  return (
    <div>
      <h1>{productDetail.name}</h1>
      <img
        src={productDetail.image}
        alt={productDetail.name}
        className="w-20 h-20"
      />
      <p>{productDetail.description}</p>
      <h3>₦{productDetail.price}</h3>
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
      <button
        className="bg-customPurple text-white px-6 py-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      <Link to="/payment" className="ml-4">
        Proceed to Payment
      </Link>
    </div>
  );
};

export default ProductDetail;
