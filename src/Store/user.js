const defaultState = {
    isAuthenticated: false,
    user: {}
} 

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "totalAmount":
            return {
                ...state,  // Spread the existing state to preserve other properties
                totalAmount: action.payload.price
            };
        case "addProducts":
            return {
                ...state,
                products: [...state.products, action.payload.product]
            };
        default:
            return state;  // Return the unchanged state for unrecognized actions
    }
};

export default userReducer;