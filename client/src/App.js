// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Authentication from './pages/Authentication';

import Cart from './pages/customer/Cart';
import Profile from './pages/customer/Profile';
import CategoryProducts from './pages/customer/CategoryProducts';
import IndividualRestaurant from './pages/customer/IndividualRestaurant';

import Admin from './pages/admin/Admin';
import AllUsers from './pages/admin/AllUsers';
import AllOrders from './pages/admin/AllOrders';
import AllRestaurants from './pages/admin/AllRestaurants';

import RestaurantHome from './pages/Restaurant/RestaurantHome';
import RestaurantOrders from './pages/Restaurant/RestaurantOrders';
import RestaurantMenu from './pages/Restaurant/RestaurantMenu';
import NewProduct from './pages/Restaurant/NewProduct';
import EditProduct from './pages/Restaurant/EditProduct';

import NotFound from './pages/NotFound'; // Import your NotFound component

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* Authentication Route */}
        <Route path='/auth' element={<Authentication />} />

        {/* Home Route */}
        <Route path='/' element={<Home />} />

        {/* Customer Routes */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/restaurant/:id' element={<IndividualRestaurant />} />
        <Route path='/category/:category' element={<CategoryProducts />} />
        <Route path='/profile' element={<Profile />} />

        {/* Admin Routes */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/all-restaurants' element={<AllRestaurants />} />
        <Route path='/all-users' element={<AllUsers />} />
        <Route path='/all-orders' element={<AllOrders />} />

        {/* Restaurant Owner Routes */}
        <Route path='/restaurant' element={<RestaurantHome />} />
        <Route path='/restaurant-orders' element={<RestaurantOrders />} />
        <Route path='/restaurant-menu' element={<RestaurantMenu />} />
        <Route path='/new-product' element={<NewProduct />} />
        <Route path='/update-product/:id' element={<EditProduct />} />

        {/* 404 Not Found Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
