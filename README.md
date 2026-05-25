# Paradise Nursery - Shopping Application

An online plant shop built with React and Redux Toolkit. Browse a variety of houseplants, add them to your shopping cart, and manage your selections before checkout.

## Features

- **Landing Page**: Beautiful hero section with company info and a "Get Started" button
- **Product Listing**: 18 houseplants organized into 3 categories (Aromatic, Air Purifying, Succulents & Cacti)
- **Shopping Cart**: Full cart management with quantity controls, item removal, and total cost calculation
- **Redux State Management**: Centralized cart state using Redux Toolkit
- **Responsive Design**: Mobile-friendly layout

## Tech Stack

- React 19
- Redux Toolkit
- React Router
- Vite
- GitHub Pages (deployment)

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

```bash
npm run deploy
```

## Project Structure

```
src/
├── App.jsx          # Landing page + routing
├── App.css          # Landing page styles (background image)
├── AboutUs.jsx      # Company description component
├── ProductList.jsx  # Product listing page
├── ProductList.css  # Product listing styles
├── CartItem.jsx     # Shopping cart page
├── CartItem.css     # Shopping cart styles
├── Header.jsx       # Navigation bar component
├── Header.css       # Navigation bar styles
├── store/
│   ├── CartSlice.jsx  # Redux slice for cart state
│   └── store.js       # Redux store configuration
├── main.jsx         # App entry point with providers
└── index.css        # Global styles
```
