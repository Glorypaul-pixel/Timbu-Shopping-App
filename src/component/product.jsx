import { products } from "./productList";
import ProductCard from "./productCard";
import Arrow from "./image/ep_arrow-down.png";

const Product = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-12 pt-7 font-inter font-semibold cursor-default">
        <h4 className="flex items-center">
          Filter
          <img src={Arrow} alt="Arrow down" className="ml-1" />
        </h4>
        <h4 className="flex items-center">
          Sort By Latest
          <img src={Arrow} alt="Arrow down" className="ml-1" />
        </h4>
      </div>
      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-9 font-inter ">
        {products.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
      <ul className="flex items-center justify-center">
      <li className="bg-customPurple text-white w-6 text-center mr-4">1</li>
      <li className="mr-4">2</li>
      <li className="mr-6">3</li>
      <li className="mr-4">9</li>
      <li className="mr-4">10</li>
    </ul>
    </div>
  );
};

export default Product;
