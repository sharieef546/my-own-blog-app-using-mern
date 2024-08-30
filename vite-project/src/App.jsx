import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';  // PascalCase for React component
import SignUp from './pages/SignUp';  // PascalCase for React component
import Projects from './pages/Projects';  // PascalCase for React component
import About from './pages/About';  // PascalCase for React component
import Home from './pages/Home';  // PascalCase for React component
import Dashboard from './pages/Dashboard';  // PascalCase for React component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />  // PascalCase component
        <Route path='/signup' element={<SignUp />} />  // PascalCase component
        <Route path='/dashboard' element={<Dashboard />} />  // PascalCase component
        <Route path='/signin' element={<SignIn />} />  // PascalCase component
      </Routes>
    </BrowserRouter>
  );
}