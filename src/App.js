import "./App.css";
import StopSearch from "./components/stop-search/stop-search";
import {  Route, Routes } from "react-router-dom";
import Faqs from "./components/faqs/faqs";
import Home from "./components/home/home";
import Accessibility from "./components/accessibility/accessibility";
import Contact from "./components/contact/contact"; 
import AccessibilityContextProvider from "./context/AccessibilityContext";

function App() {
  
  
  return (
    <>
    <AccessibilityContextProvider>
    <div className="App" style={{alignContent: 'center'}}>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopSearch" element={<StopSearch />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Accesibilidad" element={<Accessibility />} />
        <Route path="/Contacto" element={<Contact />} />
      </Routes>
    </div>
    </AccessibilityContextProvider>
    </>
  );
}


export default App;
