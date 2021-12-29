import { CartAction } from "../actions/actions"
import { ActionType } from '../actions/actionTypes'

export const CartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action: CartAction
) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case ActionType.REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    default:
      return state;
  }
};