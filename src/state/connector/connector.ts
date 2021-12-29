import { connect, ConnectedProps } from 'react-redux'
import  { fetchProducts, filterProducts, sortProducts } from "../actions/actionCreators/productActions";
import  { addToCart, removeFromCart } from "../actions/actionCreators/cartActions";
import  { createOrder, clearOrder, fetchOrders } from "../actions/actionCreators/orderActions";
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";

interface StateProps {
  products: { items: ProductType[] },
  carts: ProductType[],
  orders: OrderType[]
}

const mapState = (state: StateProps) => ({
  products: state.products.items,
  cartsState: state.carts,
  ordersState: state.orders,
})

const mapDispatch = {
  fetchProducts,
  filterProducts,
  sortProducts,
  addToCart,
  removeFromCart,
  createOrder,
  clearOrder,
  fetchOrders
}

export const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>