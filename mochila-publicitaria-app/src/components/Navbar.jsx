import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, MapPin } from "lucide-react";
import logoImg from "../assets/LOGO_Publi.png";

const NAV_LINKS = [
  { label: "Inicio", path: "/" },
];

const PRODUCT_CATEGORIES = [
  { number: "01", label: "Mochilas", path: "/productos/mochilas" },
  { number: "02", label: "Neceseres", path: "/productos/neceseres" },
  { number: "03", label: "Chimpuneras", path: "/productos/chimpuneras" },
  { number: "04", label: "Maletines", path: "/productos/maletines" },
  { number: "05", label: "Canguros", path: "/productos/canguros" },
  { number: "06", label: "Loncheras", path: "/productos/loncheras" },
  { number: "07", label: "Morrales", path: "/productos/morrales" },
  { number: "08", label: "Coolers", path: "/productos/coolers" },
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#6B6B6B] text-white py-2 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs tracking-wider font-body">
            VENTAS AL POR MAYOR - PEDIDOS MÍNIMOS DESDE 50 UNIDADES
          </p>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Izquierda */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMenuOpen(true)}
                className="text-[#6B6B6B] lg:hidden"
              >
                <Menu size={26} />
              </button>

              <a
                href="https://maps.app.goo.gl/bYkkLzr3hyDwdmW29"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block text-gray-500 hover:text-[#6B6B6B]"
              >
                <MapPin size={20} />
              </a>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2"
            >
              <img
                src={logoImg}
                alt="Publiventa"
                className="h-12 lg:h-18 w-auto"
              />
            </Link>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/51958438095?text=Hola,%20quiero%20cotizar%20mochilas"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-2 px-5 py-2 bg-[#25D366] rounded-lg text-white font-semibold hover:bg-[#1DA851]"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href="https://wa.me/51958438095?text=Hola,%20quiero%20cotizar%20mochilas"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:hidden text-[#25D366]"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Menú Desktop */}
<div className="hidden lg:block border-t border-gray-100">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-center gap-8 xl:gap-10 h-12 flex-wrap">

      {/* Inicio */}
      <Link
        to="/"
        className={`uppercase text-xs tracking-[0.15em] ${
          location.pathname === "/"
            ? "text-[#1A1A1A] font-semibold"
            : "text-gray-600 hover:text-[#1a1a2e]"
        }`}
      >
        Inicio
      </Link>

      {/* Categorías */}
      {PRODUCT_CATEGORIES.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`uppercase text-xs tracking-[0.15em] ${
            location.pathname === item.path
              ? "text-[#1A1A1A] font-semibold"
              : "text-gray-600 hover:text-[#6B6B6B]"
          }`}
        >
          {item.label}
        </Link>
      ))}

    </div>
  </div>
</div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b">
            <img
              src={logoImg}
              alt="Publiventa"
              className="h-14 w-auto"
            />

            <button onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Inicio */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-5 py-6 px-5 border-b border-[#E8C178]"
          >
            <span className="w-12 text-4xl font-extrabold text-[#E53935]">
              00
            </span>

            <span className="text-[28px] font-bold uppercase text-[#F08A00]">
              Inicio
            </span>
          </Link>

          {/* Categorías */}
          {PRODUCT_CATEGORIES.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-5 py-6 px-5 border-b border-[#E8C178]"
            >
              <span className="w-12 text-4xl font-extrabold text-[#E53935]">
                {item.number}
              </span>

              <span className="text-[28px] font-bold uppercase tracking-tight text-[#F08A00]">
                {item.label}
              </span>
            </Link>
          ))}

          {/* WhatsApp */}
          <div className="p-6">
            <a
              href="https://wa.me/51958438095?text=Hola,%20quiero%20cotizar%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-semibold"
            >
              <MessageCircle size={20} />
              Cotizar por WhatsApp
            </a>
          </div>

        </div>
      )}
    </>
  );
}