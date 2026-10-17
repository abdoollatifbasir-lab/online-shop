import { Link } from "react-router-dom";
const ProductCard = ({product}) => {
  return (
    <div>
      {" "}
      <Link
        to={`/products/${product.id}`}
        key={product.id}
        className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow "
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
