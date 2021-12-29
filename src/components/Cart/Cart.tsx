import './Cart.scss'
import { useState } from "react";
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";
import formatCurrency from "../../util"
// components
import CartItem from '../CartItem/CartItem';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

type Props = {
  cartItems: ProductType[]
  addToCart: (clickedProduct: ProductType) => void
  removeFromCart: (id: string, all: boolean) => void
  totalItemsNumber: number
  createOrder: (order: OrderType) => void
}

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  totalItemsNumber,
  createOrder
}) => {
  const [showCheckOut, setShowCheckOut] = useState(false)
  const calculateTotal = (items: ProductType[]) =>
    items.reduce((totalItems: number, item) => totalItems + item.price * item.count, 0 )
  return (
    <div className='cart'>
      {cartItems.length === 0 
        ? <div className='cart-header'>Cart is empty</div>
        : <div className='cart-header'>You have {totalItemsNumber} in the cart</div>}
      {cartItems.map(item => (
        <CartItem
          key={item._id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}/>
      ))}
      {cartItems.length !== 0 && (
        <>
          <h2>Total: {formatCurrency(calculateTotal(cartItems))}</h2>
          <button
            className="button proceed-botton"
            onClick={() => setShowCheckOut(true)}
          >
            Proceed
          </button>
          { showCheckOut &&
            <CheckOutForm cartItems={cartItems} createOrder={createOrder}/>
          }
        </>
      )}
    </div>
  )
}

export default Cart