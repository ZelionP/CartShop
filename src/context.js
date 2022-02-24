import React, { useContext, useEffect, useReducer } from "react";
import { data } from "./data";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project"

const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: data,
    total: 0,
    amount: 0
}
const AppProvider = ({children})=>{
    const[state, dispatch] =useReducer(reducer, initialState)
    const clearCart = () =>{
        dispatch({type: "CLEAR_CART"})
    }
    const remove =(id)=>{
        dispatch({type: "REMOVE", payload: id})
    }
    const increase = (id) =>{
        dispatch({ type:"INCREASE" , payload:id})
    }
    const decrease = (id) =>{
        dispatch({ type:"DECREASE" , payload:id})
    }
    const fetchData = async() =>{
        dispatch({type:"SET_LOADING"})
        const res = await fetch() 
        const data = await res.json()
        dispatch({type:"SHOW_ITEMS", payload:data })
    }
    useEffect (() =>{
        fetchData()
    },[])
    useEffect(()=> {
        dispatch({type:"GET_TOTALS"})
    }, [state.cart])
    return <AppContext.Provider value ={{clearCart,state, remove, increase,decrease}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export{AppProvider}