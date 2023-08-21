import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";
import ProductsReducer from "./reducers/productReducer";

const store = createStore(
    ProductsReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;