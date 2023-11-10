import React, { FC } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/fetch-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addProduct } from "@/store/shopingCart-slice";
import { addToWishLists } from "@/store/wishListSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddComment from "./comments/AddComment";
import AllComments from "./comments/AllComments";

const ProductDetailsPage: FC = () => {
  const router = useRouter();
  const path = router.query.id;
  const productRef = useRef(false);
  const { entities } = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch<AppDispatch>();
  const notify = () => toast("Cart product added!");
  console.log(entities);
  useEffect(() => {
    if (productRef.current === false) {
      dispatch(fetchProducts());
    }
    return () => {
      productRef.current = true;
    };
  }, [dispatch]);

  const allDataProducts = Array.from(Object.values(entities));
  const productData = allDataProducts.map((productGroup: any, index) => (
    <>
      {Object.keys(productGroup).map((productId) => {
        const product = productGroup[productId];
        if (product.id == path)
          return (
            <div className=" min-h-screen flex bg-opal ">
              <div
                key={product.id}
                className=" py-32 pl-4 w-full flex flex-col justify-around items-center"
              >
                <img src={product.img} className="w-1/2 rounded-md"></img>
                <p className=" w-1/2 text-xl text-center p-8">{product.description}</p>
              <AddComment productId={product.id}/>
               <AllComments path={path}/>
              </div>
              <div className=" mt-32  w-1/3 h-96 mr-20 bg-white flex flex-col items-center justify-around  rounded-md">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className=" text-2xl font-bold">{product.price} $</p>
                <div className="flex gap-1">
                  <LocalShippingIcon className="text-3xl text-opal mr-2" />
                  <p className="text-2xl">free shipping</p>
                </div>
                
                <div>
                  <Button
                    className="bg-opal text-white  hover:bg-black p-2 px-8"
                    onClick={() => {
                     notify()
                      dispatch(
                        addProduct({
                          name: product.name,
                          price: product.price,
                          img: product.img,
                          id: product.id,
                          quantity: 0
                        })
                      );
                      
                    }}
                  >
                    {" "}
                    Add <ShoppingCartIcon className="ml-2 text-lg" />{" "}
                  </Button>
                  <FavoriteIcon className="ml-8 text-4xl hover:scale-125 hover:transition-all hover:text-black cursor-pointer text-opal"  onClick={() => {
                      dispatch(
                        addToWishLists({
                          name: product.name,
                          price: product.price,
                          img: product.img,
                          id: product.id,
                        })
                      );
                      
                    }}
                  ></FavoriteIcon>  
                  <ToastContainer />
                </div>
              </div>
              
            </div>
          );
      })}
    </>
  ));

  return <>{productData}</>;
};

export default ProductDetailsPage;
