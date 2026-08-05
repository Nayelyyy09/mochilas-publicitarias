import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, MessageCircle } from "lucide-react";

export default function ProductDetail({ product, onClose }) {
  const [qty, setQty] = useState(50);

  if (!product) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, me interesa cotizar ${qty} unidades de ${product.name} (${product.code}).`
    );
    window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-[#6B6B6B]/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto lg:h-full bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
              {product.badge && (
                <span className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {product.badge}
                </span>
              )}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 lg:hidden w-10 h-10 bg-white/80 text-gray-600 rounded-full flex items-center justify-center shadow-sm"
              >
                <X size={18} />
              </button>
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12 flex flex-col">
              <button
                onClick={onClose}
                className="hidden lg:flex self-end mb-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={22} strokeWidth={1.5} />
              </button>

              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#1A1A1A]">
                {product.categoryLabel}
              </span>
              <h2 className="mt-2 font-heading text-2xl lg:text-3xl font-bold text-[#6B6B6B]">
                {product.name}
              </h2>
              <div className="mt-3 w-10 h-1 bg-[#1A1A1A] rounded-full" />

              <p className="mt-5 font-body text-sm text-gray-500 leading-relaxed">
                {product.description}
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-amber-400 text-sm">{"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</span>
                  <span className="text-xs text-gray-400">({product.reviews} reseñas)</span>
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{product.code}</span>
              </div>

              {/* Specs */}
              <div className="mt-6">
                <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-3">
                  Características
                </p>
                <ul className="space-y-2">
                  {product.features.map((item, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & CTA */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="font-body text-xs tracking-widest uppercase text-gray-400 mb-3">
                  Cantidad
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setQty(Math.max(50, qty - 50))}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#6B6B6B] transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-16 text-center font-body text-sm font-semibold text-[#6B6B6B]">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 50)}
                      className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-[#6B6B6B] transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">Mínimo 50 unidades</span>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full py-4 bg-[#25d366] text-white font-body text-sm font-semibold rounded-lg hover:bg-[#1da851] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  Cotizar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
