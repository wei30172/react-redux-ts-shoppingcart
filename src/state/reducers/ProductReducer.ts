import { ProductAction } from "../actions/actions";
import { ActionType } from "../actions/actionTypes";
import { ProductType } from "../../types/ProductType.type";

const initialState = [] as ProductType[];

export const ProductReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case ActionType.FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };
    case ActionType.ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case ActionType.FECTCH_PRODUCTS:
      return {
        items: action.payload,
        filteredItems: action.payload,
      };
    default:
      return state;
  }
};
