import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice';
import './ProductList.css';

const plantsArray = [
  {
    category: 'Aromatic Plants',
    plants: [
      { name: 'Lavender', price: 18, image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=300&h=300&fit=crop', description: 'Fragrant purple flowers that promote relaxation and calm.' },
      { name: 'Rosemary', price: 15, image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=300&h=300&fit=crop', description: 'Aromatic herb perfect for cooking and natural fragrance.' },
      { name: 'Jasmine', price: 22, image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=300&h=300&fit=crop', description: 'Sweet-scented white flowers that bloom at night.' },
      { name: 'Mint', price: 12, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=300&fit=crop', description: 'Fresh and invigorating herb for teas and recipes.' },
      { name: 'Eucalyptus', price: 20, image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300&h=300&fit=crop', description: 'Refreshing scent with beautiful silvery-green leaves.' },
      { name: 'Lemon Balm', price: 14, image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?w=300&h=300&fit=crop', description: 'Citrusy aroma with natural calming properties.' },
    ],
  },
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', price: 25, image: 'https://images.unsplash.com/photo-1593482892580-e32e47e0a42f?w=300&h=300&fit=crop', description: 'Low maintenance air purifier that thrives in any light.' },
      { name: 'Peace Lily', price: 28, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop', description: 'Elegant white blooms that filter indoor toxins.' },
      { name: 'Spider Plant', price: 16, image: 'https://images.unsplash.com/photo-1572688484438-313a56e6dc34?w=300&h=300&fit=crop', description: 'Cascading green and white leaves, great for hanging.' },
      { name: 'Pothos', price: 14, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop', description: 'Trailing vine that is virtually indestructible.' },
      { name: 'Rubber Plant', price: 30, image: 'https://images.unsplash.com/photo-1609132718484-cc90df3417f8?w=300&h=300&fit=crop', description: 'Bold dark green leaves that make a statement.' },
      { name: 'Boston Fern', price: 22, image: 'https://images.unsplash.com/photo-1597055181300-e3633a917388?w=300&h=300&fit=crop', description: 'Lush feathery fronds that humidify the air.' },
    ],
  },
  {
    category: 'Succulents & Cacti',
    plants: [
      { name: 'Aloe Vera', price: 18, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop', description: 'Medicinal and decorative plant with healing gel.' },
      { name: 'Echeveria', price: 12, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop', description: 'Beautiful rosette-shaped succulent in pastel colors.' },
      { name: 'Jade Plant', price: 20, image: 'https://images.unsplash.com/photo-1509937528035-ad76f8df97e1?w=300&h=300&fit=crop', description: 'Symbol of prosperity with thick glossy leaves.' },
      { name: 'Barrel Cactus', price: 24, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop', description: 'Round desert beauty requiring minimal water.' },
      { name: 'Zebra Haworthia', price: 14, image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=300&h=300&fit=crop', description: 'Striped compact succulent perfect for desks.' },
      { name: 'String of Pearls', price: 16, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop', description: 'Cascading bead-like leaves for hanging baskets.' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-page">
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
      <div className="product-list-container">
        <h1 className="page-title">Our Collection</h1>
        <p className="page-subtitle">Discover the perfect plant for every corner of your home</p>
        {plantsArray.map((category) => (
          <div key={category.category} className="category-section">
            <h2 className="category-title">{category.category}</h2>
            <div className="product-grid">
              {category.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <div className="plant-image-container">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                  </div>
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">${plant.price}</p>
                    <button
                      className={`add-to-cart-btn ${addedToCart[plant.name] ? 'disabled' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
