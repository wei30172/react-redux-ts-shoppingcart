import './Home.scss';
import { useState } from "react";
import { useScroll } from "../../hooks";

// components
import Products from '../../components/Products/Products';
import Cart from "../../components/Cart/Cart"
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";
import Filter from '../../components/Filter/Filter';


const Home = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartIcon, setCartIcon] = useState(true)
  const { inputRef,  handleScrollTop } = useScroll(200)

  const handleClickCartIcon = () => {
    setCartOpen(!cartOpen)
    handleScrollTop()
  }

  const handleShowCartIcon = () => {
    setCartIcon(!cartIcon)
  }

  return (
    <div ref={inputRef} className="home">
      <ScrollBtn handleScrollTop={handleScrollTop}/>    
      <div className="main">
        <Filter />
        <Products/>
      </div>
      { cartIcon && <button
        className="button cart-button"
        onClick={handleClickCartIcon}
      >
        🛒
      </button>}
      { cartOpen &&
        <div className="sidebar">
          <Cart
            handleClickCartIcon={handleClickCartIcon}
            handleShowCartIcon={handleShowCartIcon}
          />
        </div>}
    </div>
  )
}

export default Home;