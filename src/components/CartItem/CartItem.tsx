import "./CartItem.scss";
import { ProductType } from "../../types/ProductType.type";
import formatCurrency from "../../util";

type Props = {
  item: ProductType;
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType, all: boolean) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <p>Price: ${item.price}</p>
          <p>Total: ${formatCurrency(item.count * item.price)}</p>
        </div>
        <div className="buttons">
          <button
            className="button remove"
            onClick={() => removeFromCart(item, true)}
          >
            remove
          </button>
          <button
            className="button"
            onClick={() => removeFromCart(item, false)}
          >
            -
          </button>
          <p className="count">{item.count}</p>
          <button className="button" onClick={() => addToCart(item)}>
            +
          </button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CartItem;
