import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const fetchProducts = async () => {
    setIsloading(true);
    try {
      let response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return {
    data: products,
    isloading,
  };
};

export default useFetch;
