// src/App.js
import React from 'react';
import 'typeface-montserrat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/HomePage/Home';
import CreateAccount from './Page/CreateAccount/CreateAccount';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
