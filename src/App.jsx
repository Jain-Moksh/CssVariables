import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';



function App() {

  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} > Home </Route>
          <Route path="/about" element={<About />} > About </Route>
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </Router>
    </UserContextProvider>
  )
}

export default App
