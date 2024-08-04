const defaultState = {
    totalAmount: 0, 
    products: [],
    whishList: [],
    loading: false
} 

// const productsReducer = (state = defaultState, action) => {
//     if(action.type === "totalAmount"){
//         return {totalAmount: action.payload.price}
//     }
//     if(action.type === "addProducts"){
//         const products = [...state.products];
//         products.push(action.payload.product);
//         return {products: products}
//     }
//     if(action.type === "addWhishlist"){
//         const products = [...state.whishList];
//         products.push(action.payload.whishList);
//         return {whishList: products}
//     }
//     if(action.type === "loading"){
//         return {loading: action.payload.loading}
//     }
// }
const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "TOTAL_AMOUNT":
            return {
                ...state,  // Spread the existing state to preserve other properties
                totalAmount: action.payload.price
            };
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: [...state.products, action.payload.product]
            };
        case "ADD_WISHLIST":
            return {
                ...state,
                whishList: [...state.whishList, action.payload.whishList]
            };
        case "LOADING":
            return {
                ...state,
                loading: action.payload.loading
            };
        default:
            return state;  // Return the unchanged state for unrecognized actions
    }
};

export default productsReducer;