import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
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
  );
}

export default Header;
