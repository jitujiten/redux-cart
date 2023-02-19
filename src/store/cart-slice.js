import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    additems(state,action){
      const newitem=action.payload; 
      
      const exitingitems=state.items.find(item=>item.id===newitem.id);
      state.totalQuantity++;
      if(!exitingitems){
       state.items.push({id:newitem.id,price:newitem.price,quantity:1,totalprice:newitem.price,name:newitem.title}) 
      }else{
        exitingitems.quantity++;
        exitingitems.totalprice+=newitem.price;
      }
    },
    removeitem(state,action){
        const id=action.payload;
        const exitingitems=state.items.find(item=>item.id===id);
        state.totalQuantity--;
        if(exitingitems.quantity===1){
          state.items=state.items.filter(item=>item.id!==id)  
        }else{
            exitingitems.quantity--;  
            exitingitems.totalprice-=exitingitems.price; 
        }
    }
  },
});

export const cartactions=cartslice.actions;


export default cartslice;