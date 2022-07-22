import "./CheckOutForm.scss";
import { useState } from "react";
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";

type Props = {
  cartItems: ProductType[];
  total: number;
  createOrder: (order: OrderType) => void;
  openModal: () => void;
};

const CheckOutForm: React.FC<Props> = ({
  cartItems,
  total,
  createOrder,
  openModal,
}) => {
  const [input, setInput] = useState({
    email: "",
    name: "",
    address: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleOrder = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createOrder({
      ...input,
      total: total,
      cartItems: [...cartItems],
    });
    setInput({
      email: "",
      name: "",
      address: "",
    });
    openModal();
  };
  return (
    <div className="checkout-form">
      <form onSubmit={handleOrder}>
        <input
          type="email"
          value={input.email}
          name="email"
          placeholder="Email"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          value={input.name}
          name="name"
          placeholder="Name"
          required
          onChange={handleInput}
        />
        <input
          type="text"
          value={input.address}
          name="address"
          placeholder="Address"
          required
          onChange={handleInput}
        />
        <input type="submit" value="Create" className="button create-button" />
      </form>
    </div>
  );
};

export default CheckOutForm;
