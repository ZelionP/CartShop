const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] }
    }
    if (action.type === "REMOVE") {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload)
        }

    }
    if (action.type === "INCERASE") {
        let currentCart = state.cart.map(item => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 }
            }
            return item
        })
        return { ...state, cart: currentCart }
    }

    if (action.type === "INCERASE") {
        let currentCart = state.cart.map(item => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount - 1 }
            }
            return item
        })
            .filter(item => item.amount !== 0)
        return { ...state, cart: currentCart }
    }
    if (action.type === "GET_TOTALS") {
        let {amount, total} = state.cart.reduce((acc, item) =>{
            const {amount} = item
            acc.amount += amount



            return acc
        }, {amount:0, total:0}) 
        return{...state, amount}
    }
    return new Error("This type of action does not exist!")
}

export default reducer