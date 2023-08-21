import React, {useEffect} from 'react';
import Products from "../components/products";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../redux/actions/productAction";
import {products} from "../redux/selectors/productSelectors";
import {Box} from "@mui/material";
import FilterProducts from "../components/filterProducts";

const HomePage = () => {

    const products_data = useSelector(products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [products])


    return (
        <Box className={'container'}>
            <Box
                className={'products row'}
            >
                <FilterProducts/>
                <Products data={products_data}/>
            </Box>
        </Box>
    );
};

export default HomePage;