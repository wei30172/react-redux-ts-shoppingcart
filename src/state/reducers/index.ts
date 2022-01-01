import { combineReducers } from "redux";
import { ProductReducer } from './ProductReducer'
import { CartReducer } from './CartReducer'
import { OrderReducer } from './OrderReducer'

const reducers = combineReducers({
  products: ProductReducer,
  cart: CartReducer,
  order: OrderReducer
})

export default reducers

export type State = ReturnType<typeof reducers>