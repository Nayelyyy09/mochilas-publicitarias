import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoImg from "../assets/LOGO_Publi.png";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="Mochilas Publicitarias" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Fabricantes directos de mochilas corporativas y artículos publicitarios en Perú. Más de 15 años de experiencia brindando soluciones de merchandising a empresas de todo el país.
            </p>
          </div>

          {/* Productos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Productos</h4>
            <ul className="space-y-3">
              {[
                { label: "Mochilas Corporativas", path: "/productos" },
                { label: "Maletines", path: "/productos" },
                { label: "Loncheras", path: "/productos" },
                { label: "Merchandising", path: "/productos" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-white/60 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Empresa</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre Nosotros", path: "/nosotros" },
                { label: "Catálogo", path: "/productos" },
                { label: "Términos", path: "#" },
                { label: "Privacidad", path: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-white/60 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-white/40" />
                <a href="tel:+51958438095" className="text-sm text-white/60 hover:text-white transition-colors">(51) 958 438 095</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-white/40" />
                <a href="mailto:ventas@mochilaspublicitarias.pe" className="text-sm text-white/60 hover:text-white transition-colors">ventas@mochilaspublicitarias.pe</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-white/40 mt-0.5" />
                <span className="text-sm text-white/60">Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">© 2026 Mochilas Publicitarias. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
