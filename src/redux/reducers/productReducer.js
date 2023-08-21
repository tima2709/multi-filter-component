
const initialState = {
    products: [],
}

export default  function ProductsReducer(state = initialState, action ) {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {...state, products: action.payload}
        default:
            return state
    }
}