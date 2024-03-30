import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  LandingPage from './pages/LandingPage/LandingPage';
//import Portfolio from './pages/Portfolio/Portfolio';
import routes from './routes';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
