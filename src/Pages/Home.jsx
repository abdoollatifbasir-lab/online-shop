import ProductList from "../Components/ProductList";
import useFetch from "../hooks/Fetch";
const Home = () => {
  const { isloading, data:products } = useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );
  if (isloading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {" "}
          welcome to our online shop{" "}
        </h1>
        <p className="text-xl text-gray-600">
          Discover amazing products at great prices
        </p>
      </div>
      <ProductList products={products.slice(0,4)} />
    </div>
  );
};

export default Home;
