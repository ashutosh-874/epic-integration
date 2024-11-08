// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Callback from './Callback';
import Home from './Home';
import Patient from './Patient'; // Assuming you have a Patient component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/patient/:id" element={<Patient />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
