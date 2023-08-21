import axios from "axios";



export const getProducts = (min_max, title) => {
    console.log(title, 'title2')
    console.log(min_max, 'min_max')
     if (min_max && title) {
        console.log(min_max, title, 'min_max title')
        return (dispatch) => {
            let min = min_max[0]
            let max = min_max[1]
            axios.get(`https://api.escuelajs.co/api/v1/products/?title=${title}&price_min=${min}&price_max=${max}&categoryId=1`)
                .then(({data}) => {
                    console.log(data, 'data')
                    dispatch({type: 'GET_PRODUCTS', payload: data})
                })
        }
    }

    else {
        return (dispatch) => {
            axios.get('https://api.escuelajs.co/api/v1/products')
                .then(({data}) => {
                    dispatch({type: 'GET_PRODUCTS', payload: data})
                })
        }
    }
}