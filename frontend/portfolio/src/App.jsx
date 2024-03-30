import { dark } from '@clerk/themes';
import { BrowserRouter, Routes, Route, useNavigate, useRoutes } from "react-router-dom";
import { LogIn, Register, LandingPage, Dashboard } from './pages/pages';
import './App.css';
import { 
  ClerkProvider,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import Portfolio from './pages/Portfolio/Portfolio';
import routes from './routes';
import { Provider, useSelector } from 'react-redux';
import { useEffect } from 'react';

  
const clerkPubKey = "pk_test_dHJ1c3RpbmctcXVldHphbC03Ny5jbGVyay5hY2NvdW50cy5kZXYk";

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  const allPages = useRoutes(routes);

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      appearance={{
        // baseTheme: dark
      }}
      navigate={(to) => navigate(to)}
    >
      {allPages}
    </ClerkProvider>
  );
}

function App() {
  const mode = useSelector((state) => state.config.mode);

  useEffect(() => {
    if(mode === "dark") {
      const html = document.querySelector('html');
      html.classList.add('dark');
    } else if (mode === "light") {
      const html = document.querySelector('html');
      html.classList.remove('dark');
    }
  }, [mode])

  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}


export default App;