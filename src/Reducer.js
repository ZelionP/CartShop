const reducer =(state, action)=>{
    if (action.type === "CLEAR_CART") {
        return {...state, cart: []}
    }
    if (action.type === "REMOVE") {
        return{
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }
    }
    return new Error("This type of action does not exist!")
}

export default reducer