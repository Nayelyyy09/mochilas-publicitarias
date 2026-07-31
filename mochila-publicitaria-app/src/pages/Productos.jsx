import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const CATEGORIES = [
  { id: "todos", label: "Todos" },
  { id: "corporativas", label: "Corporativas" },
  { id: "premium", label: "Premium" },
  { id: "economicas", label: "Económicas" },
  { id: "deportivas", label: "Deportivas" },
];

const PRODUCTS = [
  {
    code: "MOCH001",
    name: "Mochila Antamina",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila publicitaria personalizada ideal para eventos corporativos y campañas de marketing.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-7.jpg",
    badge: "Nuevo",
    badgeColor: "bg-emerald-500",
    rating: 5,
    reviews: 8,
    features: ["Personalización con logo", "Material resistente", "Diseño corporativo", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH002",
    name: "Mochila Canadá",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila publicitaria personalizada para empresas y eventos promocionales.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4-7.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 10,
    features: ["Personalización incluida", "Costuras reforzadas", "Asas acolchadas", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH003",
    name: "Mochila Caraz",
    category: "premium",
    categoryLabel: "Mochila Premium",
    description: "Mochila de alta calidad para regalos corporativos y eventos especiales.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-7-7.jpg",
    badge: "Premium",
    badgeColor: "bg-[#1a1a2e]",
    rating: 5,
    reviews: 6,
    features: ["Acabados premium", "Material de alta calidad", "Diseño exclusivo", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH004",
    name: "Mochila Cartagena",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila publicitaria ideal para campañas publicitarias y eventos empresariales.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-1-8.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 12,
    features: ["Logo bordado", "Material resistente", "Compartimentos múltiples", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH005",
    name: "Mochila Costa",
    category: "economicas",
    categoryLabel: "Mochila Económica",
    description: "Solución económica para campañas de marketing masivas y eventos corporativos.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-12-1.jpg",
    badge: "-20%",
    badgeColor: "bg-[#e94560]",
    rating: 4,
    reviews: 15,
    features: ["Precio competitivo", "Personalización incluida", "Material ligero", "Mínimo 100 unidades"],
  },
  {
    code: "MOCH006",
    name: "Mochila de Emergencia Níger",
    category: "economicas",
    categoryLabel: "Mochila Económica",
    description: "Mochila económica para distribución masiva en eventos y campañas promocionales.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-7-6.jpg",
    badge: "Popular",
    badgeColor: "bg-amber-500",
    rating: 4,
    reviews: 20,
    features: ["Ultra económica", "Impresión digital", "Bolsillo frontal", "Mínimo 100 unidades"],
  },
  {
    code: "MOCH007",
    name: "Mochila Doha",
    category: "premium",
    categoryLabel: "Mochila Premium",
    description: "Mochila premium con diseño elegante para regalos corporativos de alto nivel.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6-5.jpg",
    badge: "Premium",
    badgeColor: "bg-[#1a1a2e]",
    rating: 5,
    reviews: 8,
    features: ["Diseño elegante", "Materiales premium", "Acabados de lujo", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH008",
    name: "Mochila Essen",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila corporativa resistente para uso diario y eventos empresariales.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-11-2.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 14,
    features: ["Resistente al agua", "Costuras reforzadas", "组织 interior", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH009",
    name: "Mochila Europa",
    category: "premium",
    categoryLabel: "Mochila Premium",
    description: "Mochila de diseño europeo para eventos corporativos premium.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-1-4.jpg",
    badge: "Nuevo",
    badgeColor: "bg-emerald-500",
    rating: 5,
    reviews: 7,
    features: ["Diseño europeo", "Material premium", "Compartimento laptop", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH010",
    name: "Mochila Fort",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila resistente y funcional para campañas publicitarias exigentes.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-10-4.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 11,
    features: ["Ultra resistente", "Material reforzado", "Diseño funcional", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH011",
    name: "Mochila Ghent",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila publicitaria con diseño moderno para empresas y eventos.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6-6.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 9,
    features: ["Diseño moderno", "Personalización completa", "Material resistente", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH012",
    name: "Mochila Glasglow",
    category: "premium",
    categoryLabel: "Mochila Premium",
    description: "Mochila de alta gama para regalos corporativos y eventos especiales.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-5-6.jpg",
    badge: "Premium",
    badgeColor: "bg-[#1a1a2e]",
    rating: 5,
    reviews: 6,
    features: ["Alta gama", "Acabados premium", "Packaging especial", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH013",
    name: "Mochila Hobart",
    category: "deportivas",
    categoryLabel: "Mochila Deportiva",
    description: "Mochila deportiva ideal para eventos al aire libre y campañas activas.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4-8.jpg",
    badge: "Nuevo",
    badgeColor: "bg-emerald-500",
    rating: 4,
    reviews: 5,
    features: ["Diseño deportivo", "Material liviano", "Múltiples bolsillos", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH014",
    name: "Mochila Niza",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila elegante para eventos corporativos y regalos de empresa.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-11-3.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 13,
    features: ["Elegante", "Material de calidad", "Personalización bordada", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH015",
    name: "Mochila Olmos",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila publicitaria resistente para campañas de larga duración.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-9-2.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 10,
    features: ["Larga duración", "Material resistente", "Costuras reforzadas", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH016",
    name: "Mochila Patagonia",
    category: "deportivas",
    categoryLabel: "Mochila Deportiva",
    description: "Mochila deportiva para aventuras y eventos al aire libre.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-5-5.jpg",
    badge: "Popular",
    badgeColor: "bg-amber-500",
    rating: 5,
    reviews: 18,
    features: ["Diseño aventurero", "Resistente al agua", "Múltiples compartimentos", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH017",
    name: "Mochila Praga",
    category: "premium",
    categoryLabel: "Mochila Premium",
    description: "Mochila de diseño europeo para eventos corporativos de alto nivel.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-6.jpg",
    badge: "Premium",
    badgeColor: "bg-[#1a1a2e]",
    rating: 5,
    reviews: 7,
    features: ["Diseño europeo", "Materiales premium", "Acabados perfectos", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH018",
    name: "Mochila Riga",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila corporativa con diseño contemporáneo para empresas modernas.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-8-6.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 9,
    features: ["Diseño contemporáneo", "Funcional", "Personalización completa", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH019",
    name: "Mochila Safari",
    category: "deportivas",
    categoryLabel: "Mochila Deportiva",
    description: "Mochila para actividades outdoor y campañas de aventura.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-1-7.jpg",
    badge: null,
    badgeColor: "",
    rating: 4,
    reviews: 12,
    features: ["Diseño safari", "Resistente", "Múltiples bolsillos", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH020",
    name: "Mochila Selva",
    category: "deportivas",
    categoryLabel: "Mochila Deportiva",
    description: "Mochila resistente para actividades extremas y eventos outdoor.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-8-5.jpg",
    badge: "Nuevo",
    badgeColor: "bg-emerald-500",
    rating: 5,
    reviews: 6,
    features: ["Ultra resistente", "Material premium", "Diseño aventurero", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH021",
    name: "Mochila Sintra",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila elegante y funcional para el día a día corporativo.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-10-5.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 11,
    features: ["Elegante", "Funcional", "Compartimento laptop", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH022",
    name: "Mochila Suiza",
    category: "premium",
    categoryLabel: "Mochila Premium",
    description: "Mochila de calidad suiza para regalos corporativos exclusivos.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4-3.jpg",
    badge: "Premium",
    badgeColor: "bg-[#1a1a2e]",
    rating: 5,
    reviews: 8,
    features: ["Calidad suiza", "Materiales excelentes", "Diseño exclusivo", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH023",
    name: "Mochila Sullana",
    category: "economicas",
    categoryLabel: "Mochila Económica",
    description: "Mochila económica ideal para campañas masivas y eventos grandes.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-3-6.jpg",
    badge: null,
    badgeColor: "",
    rating: 4,
    reviews: 16,
    features: ["Económica", "Personalización incluida", "Material resistente", "Mínimo 100 unidades"],
  },
  {
    code: "MOCH024",
    name: "Mochila Tokyo",
    category: "premium",
    categoryLabel: "Mochila Premium",
    description: "Mochila de estilo japonés para eventos corporativos sofisticados.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-3-5.jpg",
    badge: "Nuevo",
    badgeColor: "bg-emerald-500",
    rating: 5,
    reviews: 5,
    features: ["Estilo japonés", "Minimalista", "Materiales premium", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH025",
    name: "Mochila Urban",
    category: "corporativas",
    categoryLabel: "Mochila Corporativa",
    description: "Mochila urbana moderna para profesionales y eventos corporativos.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-12.jpg",
    badge: "Popular",
    badgeColor: "bg-amber-500",
    rating: 5,
    reviews: 22,
    features: ["Diseño urbano", "Moderna", "Compartimento laptop", "Mínimo 50 unidades"],
  },
  {
    code: "MOCH026",
    name: "Mochila Viajera África",
    category: "deportivas",
    categoryLabel: "Mochila Deportiva",
    description: "Mochila de diseño exótico para aventureros y eventos temáticos.",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-3-2.jpg",
    badge: null,
    badgeColor: "",
    rating: 5,
    reviews: 9,
    features: ["Diseño exótico", "Resistente", "Múltiples compartimentos", "Mínimo 50 unidades"],
  },
];

function ProductCard({ product, index, onSelect }) {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-contain p-5 transition-transform duration-500 ${hovering ? "scale-105" : ""}`}
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
            {product.badge}
          </span>
        )}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${hovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <div className="w-full py-3 bg-[#1a1a2e] text-white text-sm font-semibold rounded-lg text-center">
            Ver Detalle
          </div>
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs text-gray-400 uppercase tracking-wider">{product.categoryLabel}</span>
        <h3 className="text-sm font-semibold text-gray-800 mt-1 mb-3 line-clamp-2 group-hover:text-[#e94560] transition-colors">{product.name}</h3>
        <p className="text-xs text-gray-400 mb-3 line-clamp-2">{product.description}</p>
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

export default function Productos() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    document.title = "Productos | Mochilas Publicitarias";
  }, []);

  const filtered = activeCategory === "todos"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-gray-50 py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 text-[#e94560]">
            Nuestro catálogo
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-[#1a1a2e]">
            Mochilas para cada necesidad
          </h1>
          <div className="mt-4 mx-auto w-12 h-1 bg-[#e94560] rounded-full" />
          <p className="mt-6 text-gray-500 max-w-lg mx-auto">
            Desde opciones económicas hasta modelos premium, tenemos la mochila perfecta para tu empresa.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-body text-sm px-5 py-2.5 rounded-lg transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#1a1a2e] text-white shadow-lg"
                  : "bg-white text-gray-500 hover:text-[#1a1a2e] border border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div key={activeCategory} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, i) => (
            <ProductCard key={product.code} product={product} index={i} onSelect={setSelectedProduct} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#e94560] text-white font-body text-sm rounded-lg hover:bg-[#d63851] transition-all duration-300"
          >
            Solicitar cotización personalizada
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
