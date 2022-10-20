import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Destination from './components/Destination/Destination';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Toaster } from 'react-hot-toast';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import PublicRoute from './components/PublicRoute/PublicRoute';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/booking/:id"
                    element={
                        <RequiredAuth>
                            <Booking />
                        </RequiredAuth>
                    }
                />
                <Route
                    path="/destination"
                    element={
                        <RequiredAuth>
                            <Destination />
                        </RequiredAuth>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <PublicRoute>
                            <Signup />
                        </PublicRoute>
                    }
                />
            </Routes>
            <Toaster />
        </>
    );
}

export default App;
