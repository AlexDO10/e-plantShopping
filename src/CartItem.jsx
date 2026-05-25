import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementItem, decrementItem } from './store/CartSlice';
import { Link } from 'react-router-dom';
import Header from './Header';
import './CartItem.css';

function CartItem() {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Coming Soon! Our checkout feature is under development.');
  };

  return (
    <div className="cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-icon">🛒</span>
            <p>Your cart is empty</p>
            <Link to="/products" className="continue-shopping-btn">
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary-bar">
              <p className="cart-total-items">
                Total Items: <strong>{totalQuantity}</strong>
              </p>
              <p className="cart-total-cost">
                Total Cost: <strong>${totalCost}</strong>
              </p>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.name} className="cart-item-card">
                  <div className="cart-item-image-container">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </div>
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">Unit Price: ${item.price}</p>
                    <p className="cart-item-total">
                      Subtotal: <strong>${item.price * item.quantity}</strong>
                    </p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn decrease"
                        onClick={() => dispatch(decrementItem(item.name))}
                      >
                        −
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="quantity-btn increase"
                        onClick={() => dispatch(incrementItem(item.name))}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => dispatch(removeItem(item.name))}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <Link to="/products" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
