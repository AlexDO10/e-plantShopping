import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom';
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
      <header className="header">
        <div className="header-content">
          <Link to="/" className="header-logo">
            <span className="logo-icon">🌿</span>
            <span className="logo-text">Paradise Nursery</span>
          </Link>
          <nav className="header-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Plants</Link>
            <Link to="/cart" className="nav-link cart-link">
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{totalQuantity}</span>
            </Link>
          </nav>
        </div>
      </header>
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
                        onClick={() => dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }))}
                      >
                        −
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="quantity-btn increase"
                        onClick={() => dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }))}
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
