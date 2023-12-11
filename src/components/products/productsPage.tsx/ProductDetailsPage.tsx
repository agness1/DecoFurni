import React, { FC, useState } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/fetch-slice";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/router";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addProduct } from "@/store/shopingCart-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddComment from "./comments/AddComment";
import AllComments from "./comments/AllComments";
import { auth } from "@/firebase";
import { db } from "@/firebase";
import { ref, push } from "firebase/database";
import useSetLogin from "@/hooks/useSetLogin";

const ProductDetailsPage: FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const { isLogin } = useSetLogin();
  const path = router.query.id;
  const productRef = useRef(false);
  const { entities } = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch<AppDispatch>();
  const notify = () => toast("Cart product added!");
  useEffect(() => {
    if (productRef.current === false) {
      dispatch(fetchProducts());
    }
    return () => {
      productRef.current = true;
    };
  }, [dispatch]);
  const database = db;
  const userID = auth.currentUser?.uid;

  const saveWishListData = (wishListData: any, userID: any) => {
    const userWishListRef = ref(database, `users/${userID}/wishList`);
    push(userWishListRef, wishListData).catch((error: any) => {
      console.error(error);
    });
  };

  const allDataProducts = Array.from(Object.values(entities));
  const productData = allDataProducts.map((productGroup: any, index) => (
    <>
      {Object.keys(productGroup).map((productId) => {
        const product = productGroup[productId];
        if (product.id == path)
          return (
            <div className=" min-h-screen bg-slate-500  md:mb-0 pt-32 md:p-20">
              <div
                key={product.id}
                className=" md:py-30 w-full flex flex-col items-center "
              >
                <div className="md:mr-96 bg-opal md:w-3/5 rounded-md md:h-auto md:mt-10 md:mb-0 mb-10 mt-96 p-10  flex flex-col items-center ">
                  <img
                    src={product.img}
                    className=" w-3/4 md:w-2/5 md:mt-10 rounded-md md:pb-10 md:mb-0 mb-10"
                  ></img>
                  <p className=" md:w-1/3 text-2xl text-white text-left ">
                    {product.description}
                  </p>
                </div>

                <AddComment productId={product.id} />
                <AllComments path={path} />
              </div>
              <div className=" bg-opal text-white absolute left-1/2 md:left-auto transform -translate-x-1/2 top-20 md:top-32 md:right-20 w-full md:p-2 md:w-1/5 md:transform-none md:translate-x-0 h-96 md:mr-20 flex flex-col items-center justify-around rounded-md">
                <h1 className="text-2xl font-bold ">{product.name}</h1>
                <p className=" text-2xl font-bold">{product.price} $</p>
                <div className="flex gap-1">
                  <LocalShippingIcon className="text-3x mr-2" />
                  <p className="text-2xl">free shipping</p>
                </div>

                <div>
                  <button
                    className=" transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300 p-2 px-8 rounded-md border-black"
                    onClick={() => {
                      notify();
                      dispatch(
                        addProduct({
                          name: product.name,
                          price: product.price,
                          img: product.img,
                          id: product.id,
                          quantity: 0,
                        })
                      );
                    }}
                  >
                    {" "}
                    Add <ShoppingCartIcon className="ml-2 text-lg" />{" "}
                  </button>
                  <FavoriteIcon
                    className=" transition ease-in-out delay-150 ml-8 text-4xl hover:-translate-y-1 hover:scale-110 hover:text-red-600 duration-300 cursor-pointer "
                    onClick={() => {
                      if (!isClicked && isLogin) {
                        saveWishListData(product, userID);
                        setIsClicked(true);
                      } else {
                        router.push("/signInPage");
                      }
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
