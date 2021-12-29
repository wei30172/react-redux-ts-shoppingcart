import { Dispatch } from "redux"
import { OrderAction } from "../actions"
import { OrderType } from "../../../types/OrderType.type"
import { ActionType } from "../actionTypes"

export const createOrder = (order: OrderType[]) =>
  (dispatch: Dispatch<OrderAction>) => {
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ActionType.CREATE_ORDER,
          payload: data
        });
        localStorage.removeItem("cartItems");
        dispatch({
          type: ActionType.CLEAR_CART
        });
      });
};

export const clearOrder = () =>
  (dispatch: Dispatch<OrderAction>) => {
    dispatch({
      type: ActionType.CLEAR_ORDER
    });
};

export const fetchOrders = () =>
  (dispatch: Dispatch<OrderAction>) => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ActionType.FETCH_ORDERS,
          payload: data
        });
      });
};