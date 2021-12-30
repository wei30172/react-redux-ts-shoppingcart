import { CartAction } from "../actions/actions"
import { ActionType } from '../actions/actionTypes'

const initialState = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") }

export const CartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { 
        cartItems: action.payload.cartItems
      }
    case ActionType.REMOVE_FROM_CART:
      return {
        cartItems: action.payload.cartItems
      }
    default:
      return state;
  }
};