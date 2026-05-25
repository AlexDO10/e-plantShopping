# e-plantShopping

## Paradise Nursery - Online Plant Shopping Application

An online plant shop (e-plantShopping) built with React and Redux Toolkit. Browse a variety of houseplants, add them to your shopping cart, and manage your selections before checkout.

## Features

- **Landing Page**: Background image, company description, and a "Get Started" button linking to products
- **Product Listing**: 18 houseplants organized into 3 categories (Aromatic, Air Purifying, Succulents & Cacti)
- **Shopping Cart**: Full cart management with quantity controls, item removal, and total cost calculation
- **Redux State Management**: Centralized cart state using Redux Toolkit (CartSlice)
- **Responsive Design**: Mobile-friendly layout
- **Navigation Bar**: Appears on Product Listing and Cart pages with dynamic cart icon count

## Tech Stack

- React 19
- Redux Toolkit
- React Router
- Vite
- GitHub Pages (deployment)

## Getting Started

```bash
npm install
npm run preview
```

## Project Structure

```
src/
├── App.jsx          # Landing page + routing
├── App.css          # Landing page styles (background image)
├── AboutUs.jsx      # Company description component
├── AboutUs.css      # AboutUs styles
├── ProductList.jsx  # Product listing page with navbar
├── ProductList.css  # Product listing styles
├── CartItem.jsx     # Shopping cart page with navbar
├── CartItem.css     # Shopping cart styles
├── CartSlice.jsx    # Redux slice for cart state
├── store.js         # Redux store configuration
├── main.jsx         # App entry point with providers
└── index.css        # Global styles + navbar styles
```
