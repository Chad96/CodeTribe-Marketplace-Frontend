import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ItemList from './pages/ItemList'; // Updated to reflect correct naming
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import AddItem from './pages/AddItem'; // Import the AddItem component
import NavBar from './components/NavBar';

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ItemList />} /> {/* Updated to use ItemList */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/add-item" element={<AddItem />} /> {/* New route for adding items */}
    </Routes>
  </div>
);

export default App;
