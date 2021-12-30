import { connect, ConnectedProps } from 'react-redux'
import  { addToCart, removeFromCart } from "../actions/actionCreators/cartActions";
import { ProductType } from "../../types/ProductType.type";

interface StateProps {
  cart: {
    cartItems: ProductType[]
  },
}

const mapState = (state: StateProps) => ({
  cartItems: state.cart.cartItems,
})

const mapDispatch = {
  addToCart,
  removeFromCart,
}

export const cartConnector = connect(mapState, mapDispatch)
export type PropsFromRedux = ConnectedProps<typeof cartConnector>