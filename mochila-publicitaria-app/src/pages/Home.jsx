import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Palette, Truck, Star, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const CATEGORIES = [
  { icon: "🎒", title: "Mochilas", path: "/mochilas" },
  { icon: "👜", title: "Neceseres", path: "/neceseres" },
  { icon: "👟", title: "Chimpuneras", path: "/chimpuneras" },
  { icon: "💼", title: "Maletines", path: "/maletines" },
  { icon: "🎽", title: "Canguros", path: "/canguros" },
  { icon: "🍱", title: "Loncheras", path: "/loncheras" },
  { icon: "🎒", title: "Morrales", path: "/morrales" },
  { icon: "🧊", title: "Coolers", path: "/coolers" },
];

const FEATURED = [
  {
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-7.jpg",
    categoryLabel: "Mochila Corporativa",
    name: "Mochila Antamina",
    code: "MOCH001",
    badge: "Nuevo",
    badgeColor: "bg-emerald-500",
    rating: 5,
    reviews: 8,
    description: "Mochila publicitaria personalizada ideal para eventos corporativos y campañas de marketing.",
    features: ["Personalización con logo", "Material resistente", "Diseño corporativo", "Mínimo 50 unidades"],
  },
  {
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-12-1.jpg",
    categoryLabel: "Mochila Económica",
    name: "Mochila Costa",
    code: "MOCH005",
    badge: "-20%",
    badgeColor: "bg-[#1A1A1A]",
    rating: 4,
    reviews: 15,
    description: "Solución económica para campañas de marketing masivas y eventos corporativos.",
    features: ["Precio competitivo", "Personalización incluida", "Material ligero", "Mínimo 100 unidades"],
  },
  {
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-5-5.jpg",
    categoryLabel: "Mochila Deportiva",
    name: "Mochila Patagonia",
    code: "MOCH016",
    badge: "Popular",
    badgeColor: "bg-amber-500",
    rating: 5,
    reviews: 18,
    description: "Mochila deportiva para aventuras y eventos al aire libre.",
    features: ["Diseño aventurero", "Resistente al agua", "Múltiples compartimentos", "Mínimo 50 unidades"],
  },
];

const FEATURES = [
  { icon: Factory, title: "Fabricantes Directos", desc: "Sin intermediarios, mejores precios y tiempos de entrega rápidos" },
  { icon: Palette, title: "Personalización Total", desc: "Bordado, impresión y relief con tu logotipo corporativo" },
  { icon: Truck, title: "Envío a Todo Perú", desc: "Entregas seguras en Lima y todo el territorio nacional" },
  { icon: Star, title: "Calidad Garantizada", desc: "Materiales premium y control de calidad en cada producto" },
];

function ProductCard({ product, index, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3 bg-white text-gray-800 py-3 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-center">
          Ver Detalle
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs text-gray-400 uppercase tracking-wider">{product.categoryLabel}</span>
        <h3 className="text-sm font-semibold text-gray-800 mt-1 mb-3 line-clamp-2 group-hover:text-[#1A1A1A] transition-colors">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-sm">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
          <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{product.code}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    document.title = "Mochilas Publicitarias | Soluciones Corporativas";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#6B6B6B] to-[#6B6B6B] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-[#1A1A1A]/20 rounded-full blur-[100px]" />
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                ✨ Fabricantes directos en Perú
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Mochilas que potencian tu marca
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Soluciones corporativas de alta calidad para congresos, eventos y promociones. Personalización completa con tu logotipo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/productos" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white font-semibold rounded-lg hover:bg-[#1E1E1E] hover:-translate-y-0.5 transition-all duration-300">
                  Ver Catálogo
                </Link>
                <Link to="/contacto" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all duration-300">
                  Solicitar Cotización
                </Link>
              </div>
              <div className="flex gap-10 mt-12 pt-8 border-t border-white/10">
                {[
                  { n: "500+", l: "Empresas" },
                  { n: "10K+", l: "Mochilas" },
                  { n: "15+", l: "Años" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-heading text-2xl font-bold">{s.n}</p>
                    <p className="text-sm text-white/60">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block"
            >
              <img
                src="https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-7.jpg"
                alt="Mochila Corporativa"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#6B6B6B] mb-4">Nuestras Categorías</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Encuentra la mochila perfecta para tu próximo evento o campaña publicitaria</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={cat.path}
                  className="group block bg-white rounded-xl p-6 lg:p-8 text-center border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:bg-[#1A1A1A] transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{cat.title}</h3>
                  <span className="text-sm text-gray-400">{cat.count}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#6B6B6B]">Productos Destacados</h2>
            </div>
            <Link to="/productos" className="hidden sm:inline-flex items-center gap-1 text-[#1A1A1A] font-medium text-sm hover:underline">
              Ver todo el catálogo <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED.map((product, i) => (
              <ProductCard key={product.code} product={product} index={i} onSelect={setSelectedProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#6B6B6B] mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Somos fabricantes directos con la mejor calidad y servicio</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <f.icon size={28} className="text-[#1A1A1A]" />
                </div>
                <h3 className="font-semibold text-[#6B6B6B] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#6B6B6B] to-[#6B6B6B] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">¿Listo para potenciar tu marca?</h2>
            <p className="text-lg text-white/80 mb-8">Solicita una cotización sin compromiso y descubre las mejores opciones para tu empresa</p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#6B6B6B] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <MessageCircle size={20} />
              Solicitar Cotización Gratis
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}
