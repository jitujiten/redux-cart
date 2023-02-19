import { configureStore } from "@reduxjs/toolkit";
import uislice from "./ui-slice";
import cartslice from "./cart-slice";

const store=configureStore({
    reducer:{ui:uislice.reducer,cart:cartslice.reducer}
})


export default store;