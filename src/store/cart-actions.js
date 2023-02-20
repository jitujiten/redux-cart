import { uiActions } from "./ui-slice";
import { cartactions } from "./cart-slice";

export const fetchcartdata =  () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://new-project-cart-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("could not fetch data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartdata = await fetchdata();
      dispatch(cartactions.replaceCart({items:cartdata.items||[],totalQuantity:cartdata.totalQuantity}));
    } catch (error) {
      dispatch(
        uiActions.shownotification({
          status: "error",
          title: "error",
          message: "sending cart data failed",
        })
      );
    }
  };
};

export const sendcartdata = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.shownotification({
        status: "pending",
        title: "sending.....",
        message: "sending cart data",
      })
    );

    const sendrequest = async () => {
      const response = await fetch(
        "https://new-project-cart-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({items:cart.items,totalQuantity:cart.totalQuantity}),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
    };
    try {
      await sendrequest();

      dispatch(
        uiActions.shownotification({
          status: "success",
          title: "success",
          message: "sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.shownotification({
          status: "error",
          title: "error",
          message: "sending cart data failed",
        })
      );
    }
  };
};
