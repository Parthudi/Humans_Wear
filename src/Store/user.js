const defaultState = {
    isAuthenticated: false,
    user: {}
} 

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: action.payload.user.is_authorized || false
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