import { useState } from "react";

const useProductPage = () => {
  const [product, setProduct] = useState(null);

  const update = (product: any) => {
    setProduct(product);
  };

  return { product, update };
};
export default useProductPage;
