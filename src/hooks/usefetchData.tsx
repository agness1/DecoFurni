import React, { FC } from "react";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/fetch-slice";
import { AppDispatch, RootState } from "@/store/store";

const useFetchData = () => {
    const productRef = useRef(false);
    const { entities } = useSelector((state: RootState) => state.products);
  
    const dispatch = useDispatch<AppDispatch>();
   
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
  
}
export default useFetchData