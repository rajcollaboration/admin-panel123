import { configureStore } from "@reduxjs/toolkit";
import { auth, products } from "./Reducers";

const store = configureStore({
    reducer:{
        auth : auth,
        products: products
    }
})

export default store;