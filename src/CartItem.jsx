import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link, useNavigate } from 'react-router-dom';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const cost = parseFloat(item.cost.substring(1));
      return total + cost * item.quantity;
    }, 0);
  };

  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.substring(1));
    return cost * item.quantity;
  };

  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    } else {
      navigate('/products');
    }
  };

  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
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
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary-bar">
              <p className="cart-total-items">
                Total Items: <strong>{totalQuantity}</strong>
              </p>
              <p className="cart-total-cost">
                Total Cost: <strong>${calculateTotalAmount()}</strong>
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
                    <p className="cart-item-unit-price">Unit Price: {item.cost}</p>
                    <p className="cart-item-total">
                      Subtotal: <strong>${calculateTotalCost(item)}</strong>
                    </p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn decrease"
                        onClick={() => handleDecrement(item)}
                      >
                        −
                      </button>
                      <span className="quantity-display">{item.quantity}</span>
                      <button
                        className="quantity-btn increase"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => handleRemove(item)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckoutShopping}>
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
