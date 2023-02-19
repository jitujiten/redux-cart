import React from "react";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isinitial=true;


function App() {
  const toggle = useSelector((state) => state.ui.cartisvisible);

  const cart = useSelector((state) => state.cart);

  const notification = useSelector((state) => state.ui.Notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendcartdata = async () => {
      dispatch(
        uiActions.shownotification({
          status: "pending",
          title: "sending.....",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://new-project-cart-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }

      dispatch(
        uiActions.shownotification({
          status: "success",
          title: "success",
          message: "sending cart data successfully",
        })
      );
    };
  if(isinitial){
    isinitial=false;
   return ; 
  }



    sendcartdata().catch((error)=>{
      dispatch(
        uiActions.shownotification({
          status: "error",
          title: "error",
          message: "sending cart data failed",
        })
      )
       } );
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
