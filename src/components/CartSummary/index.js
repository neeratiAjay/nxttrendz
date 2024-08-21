// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartItems = cartList.length
      let price = 0
      cartList.forEach(eachItem => {
        price += eachItem.price * eachItem.quantity
      })

      return (
        <div className="cart-summary-container">
          <div className="price-container">
            <h1 className="total-order-heading">
              Order Total: <span className="price-text"> Rs {price}/-</span>
            </h1>
            <p className="cart-items-text">{cartItems} items in cart</p>
          </div>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
