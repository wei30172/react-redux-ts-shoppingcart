import { OrderAction } from "../actions/actions"
import { ActionType } from '../actions/actionTypes'
import { OrderType }from '../../types/OrderType.type'

const initialState = [] as OrderType[]

export const OrderReducer = (state = initialState, action: OrderAction) => {
  switch (action.type) {
    case ActionType.CREATE_ORDER:
      return { order: action.payload };
    case ActionType.CLEAR_ORDER:
      return { order: null };
    case ActionType.FETCH_ORDERS:
      return { orders: action.payload };
    default:
      return state;
  }
};