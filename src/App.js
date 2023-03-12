import './App.scss';
import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Work from './pages/Work';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
    </Routes>
  );
}

