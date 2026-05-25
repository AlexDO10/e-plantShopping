import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="company-name">Paradise Nursery</h1>
          <h2 className="tagline">Where Green Meets Serenity</h2>
          <AboutUs />
          <Link to="/products" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
