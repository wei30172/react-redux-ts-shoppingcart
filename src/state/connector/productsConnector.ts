import { connect, ConnectedProps } from 'react-redux'
import  { fetchProducts } from "../actions/actionCreators/productActions";
import { ProductType } from "../../types/ProductType.type";

interface StateProps {
  products: {
    filteredItems: ProductType[]
  },
}

const mapState = (state: StateProps) => ({
  products: state.products.filteredItems,
})

const mapDispatch = {
  fetchProducts,
}

export const productsConnector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof productsConnector>