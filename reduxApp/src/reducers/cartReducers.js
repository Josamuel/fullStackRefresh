

export function cartReducers(state={cart: []}, action) {
    switch(action.type) {
        case "ADD_TO_CART":
        console.log('adding to cart', action.payload)
        return {cart: [...state.cart, ...action.payload]}
        break;
    }

    return state;
}