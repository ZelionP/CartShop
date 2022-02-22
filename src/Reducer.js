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
        let currentCart = state.cart.map(item=>{
            if(action.type === "INCERASE"){
                return{...item,amount:item.amount+1}
            }
            return item
        })
        return{...state,cart:currentCart}

    return new Error("This type of action does not exist!")
}

export default reducer