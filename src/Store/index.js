import {createStore} from "redux";

const defaultState = {
    totalAmount: 0, 
    products: [],
    whishList: [],
    loading: false
} 

const reducerFunc = (state = {...defaultState}, action) => {
    if(action.type === "totalAmount"){
        return {totalAmount: action.payload.price}
    }
    if(action.type === "addProducts"){
        const products = [...state.products];
        products.push(action.payload.product);
        return {products: products}
    }
    if(action.type === "addWhishlist"){
        const products = [...state.whishList];
        products.push(action.payload.whishList);
        return {whishList: products}
    }
    if(action.type === "loading"){
        return {loading: action.payload.loading}
    }
}

const store = createStore(reducerFunc);
export default store;