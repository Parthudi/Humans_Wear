import {createStore} from "redux";

const defaultState = {
    totalAmount: 0, 
    products: [],
    whishList: [],
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
        console.log(`PARTH WHISHLIST PROD :- ${products}`);
        return {whishList: products}
    }
}

const store = createStore(reducerFunc);
export default store;