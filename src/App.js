import './App.scss';
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Work from './pages/Work/Work';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

