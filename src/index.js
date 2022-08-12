import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DraftBoard from "../src/routes/DraftBoard";
import LoginFunc from "../src/routes/ManLogin";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path='/ManLogin' element={<LoginFunc />} />
  <Route path="DraftBoard" element={<DraftBoard />} />
</Routes>
  </BrowserRouter>
);
