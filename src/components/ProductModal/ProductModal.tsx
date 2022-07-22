import "./ProductModal.scss";
import Modal from "react-modal";
import { ProductType } from "../../types/ProductType.type";
import formatCurrency from "../../util";

type Props = {
  product: ProductType;
  addToCart: (product: ProductType) => void;
  closeModal: () => void;
};

const ProductModal: React.FC<Props> = ({ product, addToCart, closeModal }) => {
  return (
    <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
      <div className="product-modal">
        <button className="button close-button" onClick={closeModal}>
          X
        </button>
        <div className="product-details">
          <img src={`/images/products/${product.image}`} alt={product.title}></img>
          <div className="product-details-description">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              Avaiable Sizes:{" "}
              {product.availableSizes.map((size, index) => (
                <span key={index}>
                  {" "}
                  <button className="button">{size}</button>
                </span>
              ))}
            </p>
            <div className="product-price">
              <h3>$ {formatCurrency(product.price)}</h3>
              <button
                className="button"
                onClick={() => {
                  addToCart(product);
                  closeModal();
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
