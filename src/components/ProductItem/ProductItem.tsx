import './ProductItem.scss'
import { useState } from "react";
import { ProductType } from "../../types/ProductType.type";
import formatCurrency from "../../util"
import ProductModal from '../ProductModal/ProductModal';

type Props = {
  product: ProductType
  handleAddToCart: (clickedProduct: ProductType) => void
}

const ProductItem: React.FC<Props> = ({ product, handleAddToCart }) => {
  const [showProductModal, setShowProductModal] = useState(false)

  const openModal = () => {
    setShowProductModal(true);
  }
  const closeModal = () => {
    setShowProductModal(false);
  }

  return (
    <div className='product-item'>
      <a
        href={"#" + product._id}
        onClick={openModal}
      >
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </a>
      <div className="product-price">
        <h3>{formatCurrency(product.price)}</h3>
        <button
          className='button'
          onClick={() => handleAddToCart(product)}>
          Add to Cart
        </button>
      </div>
      {showProductModal &&
        <ProductModal
          product={product}
          handleAddToCart={handleAddToCart}
          closeModal={closeModal}
        />
      }
    </div>
  )
}

export default ProductItem