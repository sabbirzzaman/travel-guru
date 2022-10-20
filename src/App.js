import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Destination from './components/Destination/Destination';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
