import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login/Login';
import  LandingPage from './pages/LandingPage/LandingPage';
//import Portfolio from './pages/Portfolio/Portfolio';
import routes from './routes';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const mode = useSelector((state) => state.config.mode);

  useEffect(() => {
    if (mode === 'dark') {
      const html = document.querySelector('html');
      html.classList.add('dark');
    } else if (mode === 'light') {
      const html = document.querySelector('html');
      html.classList.remove('dark');
    }
  }, [mode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
