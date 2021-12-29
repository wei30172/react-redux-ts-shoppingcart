import './Home.scss';
import { useState, useEffect } from "react";
import useScroll from "../../hooks/useScroll";
import { ProductType } from "../../types/ProductType.type";
import { OrderType } from "../../types/OrderType.type";

// components
import Products from '../../components/Products/Products';
import Cart from "../../components/Cart/Cart"
import ScrollBtn from "../../components/ScrollBtn/ScrollBtn";
import Filter from '../../components/Filter/Filter';


const Home = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as ProductType[])
  const [orders, setOrders] = useState([] as OrderType[])
  const { inputRef,  handleScrollTop } = useScroll(200)

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem("cartItems")!)
    if (storage) {
      setCartItems(storage)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  const getTotalItemsNumber = (items: ProductType[]) => 
    items.reduce((totalItems: number, item) => totalItems + item.count, 0 )
  
  const handleAddToCart = (clickedProduct: ProductType) => {
    setCartItems(prev => {
      // Item in cart
      const isItemInCart = prev.find(item => item._id === clickedProduct._id)

      if (isItemInCart) {
        return prev.map(item =>
          item._id === clickedProduct._id
          ? {...item, count: item.count + 1}
          : item
        )
      }
      // first add
      return [...prev, {...clickedProduct, count: 1}]
    })
  }

  const handleRemoveFromCart = (id: string, all: boolean) => {
    setCartItems(prev => 
      prev.reduce((totalItems, item) => {
        if (item._id === id) {
          if (all || item.count === 1) { return totalItems }
          return [...totalItems, {...item, count: item.count - 1}]
        } else {
          return [...totalItems, item]
        }
      }, [] as ProductType[])
    )
  }

  const handleClickCartIcon = () => {
    setCartOpen(!cartOpen)
    handleScrollTop()
  }

  const createOrder = (order: OrderType) => {
    setOrders([...orders, {...order}])
    setCartItems([])
  }

  return (
    <div ref={inputRef} className="home">
      <ScrollBtn handleScrollTop={handleScrollTop}/>        
      <div className="main">
        <Filter />
        <Products handleAddToCart={handleAddToCart}/>
      </div>
      {/* Cart Icon */}
      <button
        className="button cart-button"
        onClick={handleClickCartIcon}
      >
        {getTotalItemsNumber(cartItems)}
      </button>
      { cartOpen &&
      <div className="sidebar">
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          totalItemsNumber={getTotalItemsNumber(cartItems)}
          createOrder={createOrder}
        />
      </div>}
    </div>
  )
}

export default Home;