import { useParams } from "react-router-dom";
import useFetch from "../hooks/Fetch";
import { useCart } from "../Context/CartContext";
const ProductDetail = () => {
  const {addToCart}=useCart();
  const { id } = useParams();
  const { data, isloading } = useFetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
  );
  // اگر هنوز اطلاعات در حال دریافت است یا data.images هنوز وجود ندارد، فعلاً loading را نمایش بده.
  if (isloading || !data?.images) {
    return <div>loading...</div>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* تصاویر محصول */}
        <div>
          <img
            src={data.images[0]}
            alt={data.title}
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg object-cover"
          />
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-4">
            {data.images.slice(1).map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`${data.title} ${i + 2}`}
                className="w-full h-16 sm:h-20 md:h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
              />
            ))}
          </div>
        </div>
        {/* اطلاعات محصول */}
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
          <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-5">
            ${data.price}
          </p>
          <div className="mb-5">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Description
            </h2>
            <p className="text-sm sm:text-base leading-7 text-gray-600">
              {data.description}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Category</h2>
            <p className="text-sm sm:text-base text-gray-600">
              {data.category.name}
            </p>
          </div>
          <button onClick={()=>{
            addToCart(data);
          
          }} className="w-full bg-blue-600 text-white py-3 sm:py-3.5 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
