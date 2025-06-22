import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/chat" element={<Chat />} />
        {/* Outras rotas virão depois */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);