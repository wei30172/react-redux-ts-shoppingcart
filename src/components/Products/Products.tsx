import './Products.scss'
import { useEffect } from "react";
import { PropsFromRedux, productsConnector } from '../../state/connector/productsConnector';
import { ProductType } from '../../types/ProductType.type'

// components
import ProductItem from "../ProductItem/ProductItem"

interface Props extends PropsFromRedux {
  products:  ProductType[]
  fetchProducts: () => Promise<void>
  handleAddToCart: (clickedProduct: ProductType) => void
}

const Products = (
  { products,
    fetchProducts,
    handleAddToCart
  }: Props) => {
 
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  
  return !products ? (
    <div>Loading...</div>
  ) : (
    <div className="products">
      {products.map((product: ProductType) => (
        <div key={product._id}>
          <ProductItem product={product} handleAddToCart={handleAddToCart}/>
        </div>
      ))}
    </div>
  )
}

export default productsConnector(Products)