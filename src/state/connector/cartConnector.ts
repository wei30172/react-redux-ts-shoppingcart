import { connect, ConnectedProps } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "../actions/actionCreators/cartActions";
import {
  createOrder,
  clearOrder,
} from "../actions/actionCreators/orderActions";
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";

interface StateProps {
  cart: {
    cartItems: ProductType[];
  };
  order: {
    order: OrderType;
  };
}

const mapState = (state: StateProps) => ({
  cartItems: state.cart.cartItems,
  order: state.order.order,
});

const mapDispatch = {
  addToCart,
  removeFromCart,
  clearCart,
  createOrder,
  clearOrder,
};

export const cartConnector = connect(mapState, mapDispatch);
export type PropsFromRedux = ConnectedProps<typeof cartConnector>;
