import axios from "axios";




export const getProducts = (min_max, title, categoryId) => {
    console.log(title, 'title2')
    console.log(min_max, 'min_max')
    console.log(categoryId, 'id2')

    if (categoryId && !min_max && !title) {
        console.log(categoryId, 'id')
        return (dispatch) => {
            axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
                .then(({data}) => {
                    console.log(data, 'data1')
                    dispatch({type: 'GET_PRODUCTS', payload: data})
                })
        }
    } else if (min_max && !title) {
        return (dispatch) => {
            let min = min_max[0]
            let max = min_max[1]
            axios.get(`https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}`)
                .then(({data}) => {
                    console.log(data, 'data1')
                    dispatch({type: 'GET_PRODUCTS', payload: data})
                })
        }
    } else if (min_max && title) {
        console.log(min_max, title, 'min_max title')
        return (dispatch) => {
            let min = min_max[0]
            let max = min_max[1]
            axios.get(`https://api.escuelajs.co/api/v1/products/?title=${title}&price_min=${min}&price_max=${max}&categoryId=1`)
                .then(({data}) => {
                    console.log(data, 'data2')
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