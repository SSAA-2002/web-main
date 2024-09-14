import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Visapage from './pages/Visapage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function AppMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/visa" element={<Visapage />} />
        {/* <Route path="/attestation" element={<Attestation/>} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/passportservices" element={<PassportServices />} /> */}





      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMain />
  </StrictMode>,
)
