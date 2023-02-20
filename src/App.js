import React from "react";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendcartdata,fetchcartdata } from "./store/cart-actions";


let isinitial=true;


function App() {
  const toggle = useSelector((state) => state.ui.cartisvisible);

  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state) => state.ui.Notification);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchcartdata())
},[dispatch])




  useEffect(() => {
   if(isinitial){
    isinitial=false;
    return;
   }

   if(cart.changed){
    dispatch(sendcartdata(cart));
   }
   
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {toggle && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
