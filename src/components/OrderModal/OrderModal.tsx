import "./OrderModal.scss";
import Modal from "react-modal";
import { OrderType } from "../../types/OrderType.type";
import formatCurrency from "../../util";

type Props = {
  order: OrderType;
  closeModal: () => void;
};

const OrderModal: React.FC<Props> = ({ order, closeModal }) => {
  return (
    <Modal isOpen={true} onRequestClose={closeModal} ariaHideApp={false}>
      <div className="order-modal">
        <button className="button close-button" onClick={closeModal}>
          X
        </button>
        <div className="order-details">
          <h3 className="success-message">Your order has been placed.</h3>
          <h2>Order</h2>
          {order && (
            <ul>
              <li>
                <div>Name:</div>
                <div>{order.name}</div>
              </li>
              <li>
                <div>Email:</div>
                <div>{order.email}</div>
              </li>
              <li>
                <div>Address:</div>
                <div>{order.address}</div>
              </li>
              <li>
                <div>Total:</div>
                <div>$ {formatCurrency(order.total)}</div>
              </li>
              <li className="items">
                <div>Cart Items:</div>
                <div>
                  {order.cartItems.map((item, index) => (
                    <div key={index}>
                      {item.count} {" x "} {item.title}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
