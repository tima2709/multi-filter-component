import React from 'react';
import {Box} from "@mui/material";
import {Typography} from "@mui/joy";




const ProductCard = ({product, key}) => {
    const images = product.images
    return (
        <Box
            key={key}
            className={'col-3'}
            sx={{
                paddingBottom: '20px'
            }}
        >
            {/*<Box*/}
            {/*    component='img'*/}
            {/*    src={images[0]}*/}
            {/*    // key={idx}*/}
            {/*    alt={'img'}*/}
            {/*/>*/}
            <img src={images[0]} alt="img"/>
            <Typography
                sx={{
                    fontSize: '20px',
                    paddingTop: '10px'
                }}
                variant="h1"
            >
                $ {product.price}
            </Typography>
            <Typography
                variant="p"
            >
                {product.title}
            </Typography>
            <Typography
                variant="p"
            >
                {product?.category?.name}
            </Typography>
        </Box>
    );
};

export default ProductCard;