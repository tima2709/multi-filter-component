import React from 'react';
import {Box} from "@mui/material";
import ProductCard from "../productCard";

const Products = ({data}) => {

    return (
        <Box className={'col-6'}>
            <Box className={'row'}>
                {
                    data?.map((product, idx) => (
                        <ProductCard product={product} key={idx}/>
                    ))
                }
            </Box>
        </Box>
    );
};

export default Products;