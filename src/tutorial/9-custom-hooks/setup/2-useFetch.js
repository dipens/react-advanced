import {useState, useEffect} from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])



  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(url)
      const product = await response.json()
      setProducts(product);
      setLoading(false);
    };
    getProducts();
  }, [url]);
  return {loading,products};
};
