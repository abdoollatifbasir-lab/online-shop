import { useState } from "react";
import ProductList from "../Components/ProductList";
import useFetch from "../hooks/Fetch";
const Products = () => {
  const [category, setCategory] = useState("all");
  const { isloading, data:products } = useFetch(
    "https://api.escuelajs.co/api/v1/products",
  );
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category.name === category);
  if (isloading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All products</h1>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-md py-2 px-3"
        >
          <option value="all">All Categories</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Shoes">Shoes</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Products;
