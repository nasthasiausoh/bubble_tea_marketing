import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import MilkTeaProducts from './components/MilkTeaProducts';
import FruitTeaProducts from './components/FruitTeaProducts';
import SpecialDrinksProducts from './components/SpecialDrinksProducts';
import Signup from './components/Signup';
import Login from './components/Login';
import UserProfilePage from './pages/UserProfilePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import BuyPage from './pages/BuyPage';
import NotFound from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import Footer from './components/Footer'
import { initializeZeta, trackSignedUpEvent, trackPurchaseEvent, trackPageTimeSpent, trackPage} from './contexts/zetaTracking.js';



const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [discountedTotal, setDiscountedTotal] = useState(null); // New state for discounted total
  const [customerID, setCustomerID] = useState(uuidv4()); // Generate unique customerID
  const [orderID, setOrderID] = useState(uuidv4()); // Generate unique orderID
  const [orderAmount, setOrderAmount] = useState(''); // Set a default orderAmount (it was set to 50 before)

  const [currentPage, setCurrentPage] = useState('/');
  const [startTime, setStartTime] = useState(Date.now());

  // Initialize Zeta library
  initializeZeta();

  // useEffect(() => {
  //   // Track time spent when the component mounts
  //   setStartTime(Date.now());

  //   // Clean up the timer when the component unmounts
  //   return () => {
  //     const endTime = Date.now();
  //     const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000);

  //     // No need to track page time spent here
  //   };
  // }, [startTime]);



//for the page_time_spent event: doesnt work properly
  // useEffect(() => {
  //   // Track time spent when the component mounts
  //   setStartTime(Date.now());

  //   // Clean up the timer when the component unmounts
  //   return () => {
  //     const endTime = Date.now();
  //     const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000);

  //     // Track the page time spent for the current page
  //     // Use a placeholder, as location is not available here
  //     trackPage('/current-page', timeSpentInSeconds);
  //   };
  // }, [startTime]);




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
        price: 6.99,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-YIN-YANG-REGULIER_350x350.png',
        description: 'Chocolate Nutella Milk Tea with Tapioca Pearls',
        category: 'Milk Tea',
      },
      {
        id: 2,
        name: 'Energy TAP',
        price: 8.99,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-PETIT-BOBA-REGULIER_350x350.png',
        description: 'Caffeinated Eneregy Drink with Tapioca Pearls' ,
        category: 'Signature Drink',
      },
      {
        id: 3,
        name: 'MixTAPe',
        price: 9.99,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-BLEUET-REGULIER_350x350.png',
        description:'A Cocktail Drink with Tapioca Pearls' ,
        category: 'Signature Drink',
      },
      {
        id: 4,
        name: 'Brown Sugar Milk Tea',
        price: 6.50,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-BLACK-SUGAR-REGULIER_350x350.png',
        description: 'Brown Sugar Milk Tea with Tapioca Pearls' ,
        category: 'Milk Tea',
      },
      {
        id: 5,
        name: 'Taro Milk Tea',
        price: 6.59,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-TARO-REGULIER_350x350.png',
        description: 'Taro Milk Tea with Tapioca Pearls',
        category: 'Milk Tea',
      },
      {
        id: 6,
        name: 'Strawberry Fruit Tea',
        price: 5.50,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-CANNEBERGE-REGULIER_350x350.png',
        description: 'Strawberry Fruit Tea with Lychee Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
        id: 7,
        name: 'Lychee Fruit Tea',
        price: 5.50,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-LITCHI-REGULIER_350x350.png',
        description: 'Lychee Fruit Tea with Lychee Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
        id: 8,
        name: 'Mango Fruit Tea',
        price: 5.50,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-PECHE-REGULIER_350x350.png',
        description: 'Mango Fruit Tea with Mango Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
        id: 9,
        name: 'Peachberry Fruit Tea',
        price: 5.70,
        image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-PAMPLEMOUSSE-REGULIER_350x350.png',
        description: 'Peachberry Fruit Tea with Mango Popping Boba' ,
        category: 'Fruit Tea',
      },
      {
      id: 10,
      name: 'Warm Oat Spiced Vanilla Chai',
      price: 7.99,
      image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-ORIGINAL-REGULIER_350x350.png',
      description:'A Warm Spiced Vanilla Chai with Tapioca Pearls' ,
      category: 'Signature Drink',
    },
    {
      id: 11,
      name: 'Matcha Milk Tea',
      price: 7.99,
      image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-MATCHA-REGULIER_350x350.png',
      description: 'Matcha Milk Tea with Tapioca Pearls',
      category: 'Milk Tea',
    },
    {
      id: 12,
      name: 'Pomegranate & Lychee Fizz',
      price: 6.99,
      image: 'https://bubbleteashop.com/wp-content/uploads/2022/06/BBTS-PAMPLEMOUSSE-REGULIER_350x350.png',
      description:'Pomegranate & Lychee Fizz with Lychee Popping Boba' ,
      category: 'Signature Drink',
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

    const [currentSlide, setCurrentSlide] = useState(0);
    const specialDrinkRef = useRef(null);
  
    const CustomNextArrow = (props) => {
      const { className, onClick } = props;
      return <div className={className} onClick={onClick}><i className="fas fa-chevron-right"></i></div>;
    };
  
    const CustomPrevArrow = (props) => {
      const { className, onClick } = props;
      return <div className={className} onClick={onClick}><i className="fas fa-chevron-left"></i></div>;
    };
  
    const groupedProducts = productsData.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      afterChange: (current) => setCurrentSlide(current),
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };
  
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header cart={cart} user={user} setCart={setCart} />
         
         <Routes>
          <Route path="/" element={
          <ProductPage 
            productsData={productsData} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
            setCart={setCart}
            cart={cart} />} />

          <Route
            path="/milk-tea" 
            element={
            <MilkTeaProducts
              productsData={productsData} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart}
              setCart={setCart}
              cart={cart}
              groupedProducts={groupedProducts}
              specialDrinkRef={specialDrinkRef}
              settings={settings}
              currentSlide={currentSlide} />}
            />

          <Route
            path="/fruit-tea"
            element={
            <FruitTeaProducts
              productsData={productsData} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart}
              setCart={setCart}
              cart={cart}
              groupedProducts={groupedProducts}
              specialDrinkRef={specialDrinkRef}
              settings={settings}
              currentSlide={currentSlide} />}
          />

          <Route
          path="/signature-drinks"
          element={
          <SpecialDrinksProducts
              productsData={productsData} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart}
              setCart={setCart}
              cart={cart}
              groupedProducts={groupedProducts}
              specialDrinkRef={specialDrinkRef}
              settings={settings}
              currentSlide={currentSlide} />}
         />
         
          <Route
            path="/signup"
            element={<Signup onSignUp={handleSignUp} />}
          />
          <Route
              path="/login"
              element={<Login onLogin={handleLogin} />} // Pass the onLogin prop
            />
          <Route path="/profile" element={<UserProfilePage user={user} />} />
          <Route
            path="/cart"
            element={<CartPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cart={cart} setCart={setCart}
            setDiscountedTotal={setDiscountedTotal} />}
          />
          <Route 
            path="/buy" 
            element={<BuyPage cart={cart} discountedTotal={discountedTotal} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
        
      </Router>

      <Footer/>
    </AuthProvider>
  );
};

export default App;
