import { Dispatch } from "redux"
import { CartAction } from "../actions"
import { ProductType } from "../../../types/ProductType.type"
import { ActionType } from "../actionTypes"

export const addToCart = (product: ProductType) =>
  (dispatch: Dispatch<CartAction>, getState: () => ProductType[]) => {
    console.log(getState())
    // const cartItems: ProductType[] = [...getState().cartsState.cartItems];
    // let isItemInCart = false;
    // cartItems.forEach((item) => {
    //   if (item._id === item._id) {
    //     isItemInCart = true;
    //     item.count++;
    //   }
    // });
    // if (!isItemInCart) {
    //   cartItems.push({ ...product, count: 1 });
    // }
    // dispatch({
    //   type: ActionType.ADD_TO_CART,
    //   payload: { cartItems },
    // });
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product: ProductType) =>
  (dispatch: Dispatch<CartAction>, getState: () => ProductType[]) => {
    // const cartItems: ProductType[] = [...getState().cartsState.cartItems]
    //   .filter((item) => item._id !== product._id);
    // dispatch({
    //   type:  ActionType.REMOVE_FROM_CART,
    //   payload: { cartItems },
    // });
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
};