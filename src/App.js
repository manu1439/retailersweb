import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Invoice from './components/Invoice';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/catalog">Catalog</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/payment">Payment</Link></li>
          <li><Link to="/invoice">Invoice</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="*" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
