import './Cart.scss'
import { useState, useEffect } from "react";
import { PropsFromRedux, cartConnector } from '../../state/connector/cartConnector';
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";
import formatCurrency from "../../util"
// components
import CartItem from '../CartItem/CartItem';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import OrderModal from '../OrderModal/OrderModal';

interface Props extends PropsFromRedux {
  handleClickCartIcon: () => void
  handleShowCartIcon: () => void
  cartItems: ProductType[]
  addToCart: (product: ProductType) => void
  removeFromCart: (product: ProductType, all: boolean) => void
  clearCart: () => void
  order: OrderType
  createOrder: (order: OrderType) => void
  clearOrder: () => void
}

const Cart = ({ 
    handleClickCartIcon,
    handleShowCartIcon,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    order,
    createOrder,
    clearOrder,
  }
  : Props) => {

  const [showCheckOut, setShowCheckOut] = useState(false)
  const [showOrderModal, setShowOrderModal] = useState(false)

  const openModal = () => {
    setShowOrderModal(true)
    handleShowCartIcon()
  }

  const closeModal = () => {
    setShowOrderModal(false)
    handleClickCartIcon()
    handleShowCartIcon()
    clearCart()
    clearOrder()
  }

  const calculateTotal = (items: ProductType[]) =>
    items.reduce((totalItems: number, item) => totalItems + item.price * item.count, 0 )
  
  return !cartItems ? (
    <div>Loading...</div>
  ) : (
    <div className='cart'>
      { cartItems.length === 0 
        ? <div className='cart-header'>Cart is empty</div>
        : <div className='cart-header'>You have {cartItems.length} in the cart</div>}
      
      { cartItems.map(item => (
        <CartItem
          key={item._id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}/>
      ))}
      {cartItems.length !== 0 && (
        <>
          <h2>Total: ${formatCurrency(calculateTotal(cartItems))}</h2>
          <button
            className="button proceed-botton"
            onClick={() => setShowCheckOut(true)}
          >
            Proceed
          </button>
          { showCheckOut &&
            <CheckOutForm
              cartItems={cartItems}
              total={(formatCurrency(calculateTotal(cartItems)))}
              createOrder={createOrder}
              openModal={openModal}
            />
          }
        </>
      )}
      { showOrderModal && order &&<OrderModal
          order={order}
          closeModal={closeModal}
        />
      }
    </div>
  )
}

export default cartConnector(Cart)