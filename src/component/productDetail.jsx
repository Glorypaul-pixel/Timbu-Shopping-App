import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "./productList";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetail = () => {
  const { slug } = useParams();
  const [productDetail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (productDetail) {
      dispatch(
        addToCart({
          productId: productDetail.id,
          quantity: quantity,
        })
      );
    }
  };

  if (!productDetail) {
    return <p>Loading...</p>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-6 font-inter max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">{productDetail.name}</h1>
      <Slider {...sliderSettings} className="mb-4">
        {productDetail.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${productDetail.name} ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>
      <p className="mb-4">{productDetail.description}</p>
      <h3 className="text-xl font-bold mb-4">₦{productDetail.price}</h3>
      <div className="flex items-center mb-4">
        <button
          className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center mx-2">
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
        className="bg-customPurple text-white px-6 py-2 rounded mb-4"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      <Link
        to="/payment"
        className="bg-customPurple text-white px-6 py-2 rounded"
      >
        Proceed to Payment
      </Link>
    </div>
  );
};

export default ProductDetail;
