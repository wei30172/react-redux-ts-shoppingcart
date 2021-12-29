import { connect, ConnectedProps } from 'react-redux'
import  { filterProducts, sortProducts } from "../actions/actionCreators/productActions";
import { ProductType } from "../../types/ProductType.type";

interface StateProps {
  products: {
    size: string,
    sort: string,
    items: ProductType[]
    filteredItems: ProductType[]
  },
}

const mapState = (state: StateProps) => ({
  size: state.products.size,
  sort: state.products.sort,
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
})

const mapDispatch = {
  filterProducts,
  sortProducts,
}

export const filterConnector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof filterConnector>