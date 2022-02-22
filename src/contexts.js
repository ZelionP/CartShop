import React, { useContext, useReducer } from "react";
import { data } from "./data";
import reducer from "./Reducer";

const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: data,
    total: 0,
    amount: 0
}
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const clearCart = () => {
        dispatch({type:" CLEAR_CART"})
    }
    const remove = (id) => {
        dispatch({type:"REMOVE"})
    }
    return <AppContext.Provider value= {{clearCart,state, }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider }