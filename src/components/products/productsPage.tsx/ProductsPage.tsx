import React, { FC } from "react";
import Aside from "./Aside";
import Buttons from "./ButtonsCategory";
import Products from "./AllProducts";
import FooterSection from "@/components/homePage/footer";
import CategoryPage from "./CategoryPage";
import { useSelector } from "react-redux";

const ProductsPage: FC = () => {
  const isOpenAllproducts = useSelector((state: any) => state.page.value);

  return (
    <>
      <Buttons />
      <div className="min-h-screen md:flex">
        <Aside />
        {isOpenAllproducts ? <Products /> : <CategoryPage />}
      </div>
      <FooterSection />
    </>
  );
};

export default ProductsPage;
