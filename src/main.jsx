import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import App from './Cart'; // Carrinho

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Carrinho */}
        <Route path="/cart" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
