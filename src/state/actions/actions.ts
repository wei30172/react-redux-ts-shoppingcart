import { ActionType } from './actionTypes'
import { ProductType } from '../../types/ProductType.type'
import { OrderType } from '../../types/OrderType.type'

interface fetchProductsAction {
  type: ActionType.FECTCH_PRODUCTS
  payload: ProductType[]
}

interface filterProductsAction {
  type: ActionType.FILTER_PRODUCTS_BY_SIZE
  payload: {
    size: string
    items: ProductType[]
  }
}

interface orderProductsAction {
  type: ActionType.ORDER_PRODUCTS_BY_PRICE
  payload: {
    sort: string
    items: ProductType[]
  }
}

export type ProductAction = fetchProductsAction | filterProductsAction | orderProductsAction

interface addToCartAction {
  type: ActionType.ADD_TO_CART
  payload: {
    cartItems: ProductType[]
  }
}

interface removeFromCartAction {
  type: ActionType.REMOVE_FROM_CART
  payload: {
    cartItems: ProductType[]
  }
}

interface clearCartAction {
  type: ActionType.CLEAR_CART
}

export type CartAction = addToCartAction | removeFromCartAction | clearCartAction

interface createOrderAction {
  type: ActionType.CREATE_ORDER
  payload: {
    order: OrderType
  }
}

interface clearOrderAction {
  type: ActionType.CLEAR_ORDER
}

interface fetchOrdersAction {
  type: ActionType.FETCH_ORDERS
  payload: {
    orders: OrderType[]
  }
}

export type OrderAction = createOrderAction | clearOrderAction | fetchOrdersAction