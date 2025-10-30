import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import SplashScreen from "./pages/SplashScreen.jsx";
import OnboardingWelcome from "./pages/OnboardingWelcome.jsx";
import OnboardingDiscover from "./pages/OnboardingDiscover.jsx";
import OnboardingEnhance from "./pages/OnboardingEnhance.jsx";
import Authentication from "./pages/Auth.jsx";
import Home from "./pages/Home.jsx";
import Archive from "./pages/Archive.jsx";
import Popular from "./pages/Popular.jsx";
import Settings from "./pages/Settings.jsx";
import './styles/main.sass'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/onboarding_welcome' element={<OnboardingWelcome />} />
        <Route path='/onboarding_discover' element={<OnboardingDiscover />} />
        <Route path='/onboarding_enhance' element={<OnboardingEnhance />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/home' element={<Home />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);