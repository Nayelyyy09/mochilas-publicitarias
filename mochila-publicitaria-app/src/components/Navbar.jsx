import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import logoImg from "../assets/LOGO_Publi.png";

const NAV_LINKS = [
  { label: "Inicio", path: "/" },
  { label: "Productos", path: "/productos" },
  { label: "Personalización", path: "/personalizacion" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#1a1a2e] text-white py-2 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-wider font-body">
            VENTAS AL POR MAYOR - PEDIDOS MÍNIMOS DESDE 50 UNIDADES
          </p>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-4">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#1a1a2e] lg:hidden">
                <Menu size={24} />
              </button>
              <a href="https://maps.app.goo.gl/bYkkLzr3hyDwdmW29" target="_blank" rel="noopener noreferrer" className="hidden lg:block text-gray-500 hover:text-[#1a1a2e] transition-colors">
                <MapPin size={20} />
              </a>
            </div>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
              <img src={logoImg} alt="Mochilas Publicitarias" className="h-16 w-auto" />
            </Link>

            <div className="flex items-center gap-4">
              <a href="https://wa.me/51958438095?text=Hola,%20quiero%20cotizar%20mochilas" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] text-white text-sm font-semibold rounded-lg hover:bg-[#1da851] transition-all">
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a href="https://wa.me/51958438095?text=Hola,%20quiero%20cotizar%20mochilas" target="_blank" rel="noopener noreferrer" className="lg:hidden text-[#25d366]">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-center gap-12 h-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs tracking-[0.15em] uppercase font-body transition-all ${
                    location.pathname === link.path
                      ? "text-[#e94560] font-semibold"
                      : "text-gray-500 hover:text-[#1a1a2e]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImg} alt="Mochilas Publicitarias" className="h-16 w-auto" />
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-gray-500">
              <X size={24} />
            </button>
          </div>
          <div className="p-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-4 border-b border-gray-100 font-body text-sm tracking-wider uppercase transition-all ${
                  location.pathname === link.path
                    ? "text-[#e94560] font-semibold"
                    : "text-gray-600 hover:text-[#1a1a2e]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://wa.me/51958438095?text=Hola,%20quiero%20cotizar%20mochilas" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 mt-8 bg-[#25d366] text-white font-body text-sm font-semibold rounded-lg">
              <MessageCircle size={18} />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
