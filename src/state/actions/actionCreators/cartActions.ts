import { Dispatch } from "redux"
import { CartAction } from "../actions"
import { ProductType } from "../../../types/ProductType.type"
import { ActionType } from "../actionTypes"
import { RootState } from "../../store"

export const addToCart = (product: ProductType) =>
  (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
    const items: ProductType[] = [...getState().cart.cartItems]
    const isItemInCart = items.find(item => item._id === product._id)
    let cartItems =  isItemInCart? (
      items.map(item =>
        item._id === product._id
        ? {...item, count: item.count + 1}
        : item
      )) : [...items, {...product, count: 1}]
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: {
        cartItems: cartItems,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product: ProductType, all: boolean) =>
  (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
    const items: ProductType[] = [...getState().cart.cartItems]
    // let cartItems = items.filter((item) => item._id !== product._id);
    let cartItems = items.reduce((totalItems, item) => {
      if (item._id === product._id) {
        if (all || item.count === 1) {
          return totalItems
        } else {
          return [...totalItems, {...item, count: item.count - 1}]
        }
      } else {
        return [...totalItems, item]
      }
    }, [] as ProductType[])
    dispatch({
      type: ActionType.REMOVE_FROM_CART,
      payload: {
        cartItems: cartItems,
      },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};