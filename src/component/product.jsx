import { products } from "./productList";
import ProductCard from "./productCard";
import Arrow from "./image/ep_arrow-down.png";

const Product = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-7 pt-11 font-inter font-semibold cursor-default">
        <h4 className="flex items-center">
          Filter
          <img src={Arrow} alt="Arrow down" className="ml-1" />
        </h4>
        <h4 className="flex items-center">
          Sort By Latest
          <img src={Arrow} alt="Arrow down" className="ml-1" />
        </h4>
      </div>
      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-7 rounded-md font-inter shadow-md">
        {products.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
