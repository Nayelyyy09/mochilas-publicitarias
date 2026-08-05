import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Personalizacion from "./pages/Personalizacion";
import Mochilas from "./pages/Mochilas";
import Neceseres from "./pages/Neceseres";
import Chimpuneras from "./pages/Chimpuneras";
import Maletines from "./pages/Maletines";
import Canguros from "./pages/Canguros";
import Loncheras from "./pages/Loncheras";
import Morrales from "./pages/Morrales";
import Coolers from "./pages/Coolers";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/personalizacion" element={<Personalizacion />} />
            <Route path="/productos/mochilas" element={<Mochilas />} />
            <Route path="/productos/neceseres" element={<Neceseres />} />
            <Route path="/productos/chimpuneras" element={<Chimpuneras />} />
            <Route path="/productos/maletines" element={<Maletines />} />
            <Route path="/productos/canguros" element={<Canguros />} />
            <Route path="/productos/loncheras" element={<Loncheras />} />
            <Route path="/productos/morrales" element={<Morrales />} />
            <Route path="/productos/coolers" element={<Coolers />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
