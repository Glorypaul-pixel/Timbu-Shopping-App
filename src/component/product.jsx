import { products } from "./productList";
import ProductCard from "./productCard";
import Arrow from "./image/ep_arrow-down.png";

const Product = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-7 font-inter">
      <div className="flex justify-between items-center mb-4">
        <h4 className="flex items-center text-lg font-semibold">
          Filter
          <img src={Arrow} alt="Arrow down" className="ml-1" />
        </h4>
        <h4 className="flex items-center text-lg font-semibold">
          Sort By Latest
          <img src={Arrow} alt="Arrow down" className="ml-1" />
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
      <ul className="flex items-center justify-center mt-6">
        <li className="bg-customPurple text-white w-6 h-6 flex justify-center items-center text-sm mr-2">
          1
        </li>
        <li className="text-sm mr-2">2</li>
        <li className="text-sm mr-2">3</li>
        <li className="text-sm mr-2">9</li>
        <li className="text-sm mr-2">10</li>
      </ul>
    </div>
  );
};

export default Product;
