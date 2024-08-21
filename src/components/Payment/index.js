import {useContext, useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const paymentOptionsList = [
  {
    id: 'CARD',
    displayText: 'Card',
    isDisabled: true,
  },
  {
    id: 'NET BANKING',
    displayText: 'Net Banking',
    isDisabled: true,
  },
  {
    id: 'UPI',
    displayText: 'UPI',
    isDisabled: true,
  },
  {
    id: 'WALLET',
    displayText: 'Wallet',
    isDisabled: true,
  },
  {
    id: 'CASH ON DELIVERY',
    displayText: 'Cash on Delivery',
    isDisabled: false,
  },
]
const Payment = () => {
  const {cartList} = useContext(CartContext)

  const [paymentMethod, setPaymentMethod] = useState('')
  const [isOrderPlaced, setOrderPlaced] = useState(false)

  const updatePaymentMethod = event => {
    const {id} = event.target
    setPaymentMethod(id)
  }
  const onPlaceOrder = () => setOrderPlaced(true)
  const getTotalPrice = () =>
    cartList.reduce((acc, item) => acc + item.quantity * item.price, 0)

  const renderPaymentMethodsInput = () => (
    <ul className="payment-methods-inputs">
      {paymentOptionsList.map(eachItem => (
        <li key={eachItem.id} className="payment-mehtod-input-container">
          <input
            className="payment-method-input"
            id={eachItem.id}
            type="radio"
            name="paymentMethod"
            disabled={eachItem.isDisabled}
            onChange={updatePaymentMethod}
          />
          <label
            className={`payment-method-label ${
              eachItem.isDisabled ? 'disabled-label' : ' '
            }`}
            htmlFor={eachItem.id}
          >
            {eachItem.displayText}
          </label>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="payments-container">
      {isOrderPlaced ? (
        <p className="success-message">
          Your order has been placed successfully
        </p>
      ) : (
        <>
          <h1 className="payments-heading">Payments Details</h1>
          <p className="payment-sub-heading">Payment Method</p>
          {renderPaymentMethodsInput()}
          <div className="order-details">
            <p className="payment-sub-heading">Order Details</p>
            <p>Quantity: {cartList.length}</p>
            <p>Total Price : Rs {getTotalPrice()}/-</p>
          </div>
          <button
            disabled={paymentMethod === ''}
            type="button"
            className="confirm-order-button"
            onClick={onPlaceOrder}
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  )
}
export default Payment
