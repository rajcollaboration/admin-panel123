import { createReducer } from "@reduxjs/toolkit";

const initialStates = {
    logindata: null,
    cookie:undefined,
    inputError: "",
}

const product = {
    allProducts: [],
    allPackage:[]
}
export const auth = createReducer(initialStates,{
    login:(state,action)=>{
        state.logindata = action.payload;
    },
    logout:(state,action) => {
        state.user = null;
        state.cookie = undefined;
    },
    errorHandle:(state,action)=>{
        state.inputError = action.payload;
    }
})

export const products = createReducer(product,{
    getProducts:(state,action) =>{
        state.allProducts = action.payload;
    },

    getPackages:(state,action)=>{
        state.allPackage = action.payload;
    }
})