import './CheckOutForm.scss'
import { useState } from "react";
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";

type Props = {
  cartItems: ProductType[]
  createOrder: (order: OrderType) => void
}

const CheckOutForm: React.FC<Props> = ({ cartItems, createOrder }) => {
  const [input, setInput] = useState({
    email: "",
    name: "",
    address: ""
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  const handleOrder = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    createOrder({
      ...input,
      cartItems: [...cartItems]
    })
    setInput({
      email: "",
      name: "",
      address: ""
    })
  }
  return (
    <div className='checkout-form'>
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
        <input
          type="submit"
          value="Create"
          className="button create-button"
        />
      </form>
    </div>
  )
}

export default CheckOutForm