import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Product from './components/Product';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import SignupPage from './pages/SignupPage';
import UserProfilePage from './pages/UserProfilePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import BuyPage from './pages/BuyPage';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleSignUp = (userData) => {
    // Store the user information in local storage
    localStorage.setItem('registeredUsers', JSON.stringify([...registeredUsers, userData]));
  
    setUser(userData);
    setRegisteredUsers((prevUsers) => [...prevUsers, userData]);
  };
  

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

    const productsData = [
      {
        id: 1,
        name: 'TAPutella',
        price: 7.99,
        image: 'bubble_tea_1.jpg',
        description: 'Chocolate Nutella Milk Tea with Tapioca Pearls',
        category: 'Milk Tea',
      },
      {
        id: 2,
        name: 'Energy TAP',
        price: 8.99,
        image: 'bubble_tea_2.jpg',
        description: 'Caffeinated Eneregy Drink with Tapioca Pearls' ,
        category: 'Special Drink',
      },
      {
        id: 3,
        name: 'MixTAPe',
        price: 9.99,
        image: 'bubble_tea_3.jpg',
        description:'A Cocktail Drink with Tapioca Pearls' ,
        category: 'Special Drink',
      },
      {
        id: 4,
        name: 'Brown Sugar Milk Tea',
        price: 6.50,
        image: 'bubble_tea_4.jpg',
        description: 'Brown Sugar Milk Tea with Tapioca Pearls' ,
        category: 'Milk Tea',
      },
      {
        id: 5,
        name: 'Taro Milk Tea',
        price: 6.99,
        image: 'bubble_tea_5.jpg',
        description: 'Taro Milk Tea with Tapioca Pearls',
        category: 'Milk Tea',
      },
      {
        id: 6,
        name: 'Strawberry Fruit Tea',
        price: 5.50,
        image: 'bubble_tea_6.jpg',
        description: 'Strawberry Fruit Tea with Lychee Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
        id: 7,
        name: 'Lychee Fruit Tea',
        price: 5.50,
        image: 'bubble_tea_7.jpg',
        description: 'Lychee Fruit Tea with Lychee Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
        id: 8,
        name: 'Mango Fruit Tea',
        price: 5.50,
        image: 'bubble_tea_8.jpg',
        description: 'Mango Fruit Tea with Mango Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
        id: 9,
        name: 'Peachberry Fruit Tea',
        price: 5.70,
        image: 'bubble_tea_9.jpg',
        description: 'Peachberry Fruit Tea with Mango Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
      id: 10,
      name: 'Warm Oat Spiced Vanilla Chai',
      price: 9.99,
      image: 'bubble_tea_10.jpg',
      description:'A Warm Spiced Vanilla Chai with Tapioca Pearls' ,
      category: 'Special Drink',
    },
    {
      id: 11,
      name: 'Matcha Milk Tea',
      price: 7.99,
      image: 'bubble_tea_11.jpg',
      description: 'Matcha Milk Tea with Tapioca Pearls',
      category: 'Milk Tea',
    },
    {
      id: 12,
      name: 'Pomegranate & Lychee Fizz',
      price: 9.99,
      image: 'bubble_tea_12.jpg',
      description:'Pomegranate & Lychee Fizz with Lychee Popping Boba' ,
      category: 'Special Drink',
    },  
    ];

    const addToCart = (product) => {
      setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
  
        if (existingProductIndex !== -1) {
          const updatedCart = prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
          setCart(updatedCart); // Update the state
          return updatedCart;
        } else {
          const updatedCart = [...prevCart, { ...product, quantity: 1 }];
          setCart(updatedCart); // Update the state
          return updatedCart;
        }
      });
    };
  
    const removeFromCart = (product) => {
      setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
  
        if (existingProductIndex !== -1) {
          const updatedCart =
            prevCart[existingProductIndex].quantity > 1
              ? prevCart.map((item) =>
                  item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
                )
              : prevCart.filter((item) => item.id !== product.id);
  
          setCart(updatedCart); // Update the state
          return updatedCart;
        }
  
        return prevCart;
      });
    };

  const toggleCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  
  return (
  <AuthProvider >
    <Router>
      <div className="app">
        <Header
          cart={cart}
          toggleCart={toggleCart}
          user={user}
          setCart={setCart}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                productsData={productsData}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/products" element={
          <ProductPage 
            productsData={productsData} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
            setCart={setCart}
            cart={cart} />} />

          {/* Add a route for the Special Drinks category */}
          <Route
            path="/products/special-drinks"
            element={
            <ProductPage 
            productsData={productsData} 
            cart={cart} 
            setCart={setCart} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} />}
          />
          
          <Route
            path="/signup"
            element={<SignupPage onSignUp={handleSignUp} />}
          />
          <Route
              path="/login"
              element={<Login onLogin={handleLogin} />} // Pass the onLogin prop
            />
          <Route path="/profile" element={<UserProfilePage user={user} />} />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} setCart={setCart} />}
          />
          <Route path="/buy" element={<BuyPage cart={cart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
};

export default App;