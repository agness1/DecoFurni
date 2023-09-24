import React, { FC } from "react";
import {useEffect} from "react"
import HeaderSection from "./header";
import HeroSection from "./hero";
import FooterSection from "./footer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "@/store/fetch-slice";
import { AppDispatch, RootState } from "@/store/store";


const HomePage: FC = ({}) => {

const {entities} = useSelector((state: RootState) => state.products)

const dispatch = useDispatch<AppDispatch>()

console.log(entities)
useEffect(() => {
    dispatch(fetchProducts())
}, [])

    return (
        <>
        <HeaderSection/>
        <HeroSection/>
        <FooterSection/>
        </>
        
    )
};
export default HomePage;