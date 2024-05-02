import React, { createContext, useContext, useState } from 'react';
import './styles/styles.css';

// Creating a context for the cart
const CartContext = createContext();

// Custom hook to use cart
const useCart = () => useContext(CartContext);

// Main App component
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((item, index) => index !== indexToRemove));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div className="App">
        <ProductList />
        <Cart />
      </div>
    </CartContext.Provider>
  );
}

// Component to list products
function ProductList() {
  const { addToCart } = useCart();
  const product = {
    name: 'dinnerplate dahlia',
    color: 'assorted colors',
    price: 15,
    beautiful: true
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product">
        <h2>{product.name} - {product.color}</h2>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

// Cart component
function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h2>{item.name} - {item.color}</h2>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default fetch;