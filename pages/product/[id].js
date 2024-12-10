import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductContent from "@/components/Product/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import React from "react";

const Product = () => {
  const [product, setProduct] = useState(null);

  const router = useRouter();

  const fetchProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${router.query.id}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    router.query.id && fetchProduct();
  }, [router.query.id]);

  return (
    <div>
      <Header />
      {product && (
        <ProductContent
          title={product.title}
          description={product.description}
          imgUrl={product.image}
        />
      )}
      <Footer />
    </div>
  );
};

export default Product;
