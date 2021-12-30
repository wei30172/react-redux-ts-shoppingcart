import './Home.scss';
import { useState } from "react";
import { useScroll } from "../../hooks";
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";

// components
import Products from '../../components/Products/Products';
import Cart from "../../components/Cart/Cart"
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";
import Filter from '../../components/Filter/Filter';


const Home = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [orders, setOrders] = useState([] as OrderType[])
  const { inputRef,  handleScrollTop } = useScroll(200)

  const handleClickCartIcon = () => {
    setCartOpen(!cartOpen)
    handleScrollTop()
  }

  const createOrder = (order: OrderType) => {
    setOrders([...orders, {...order}])
    // setCartItems([])
  }

  return (
    <div ref={inputRef} className="home">
      <ScrollBtn handleScrollTop={handleScrollTop}/>        
      <div className="main">
        <Filter />
        <Products/>
      </div>
      {/* Cart Icon */}
      <button
        className="button cart-button"
        onClick={handleClickCartIcon}
      >
        🛒
      </button>
      { cartOpen &&
        <div className="sidebar">
          <Cart createOrder={createOrder}/>
        </div>}
    </div>
  )
}

export default Home;