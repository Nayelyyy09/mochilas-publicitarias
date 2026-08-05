import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, PenTool, Layers, FileText, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const OPTIONS = [
  { icon: Palette, title: "Colores a medida", desc: "Pantone personalizado para coincidir con tu marca corporativa." },
  { icon: PenTool, title: "Logo grabado", desc: "Bordado, impresión UV o relief de tu logotipo en cada mochila." },
  { icon: Layers, title: "Materiales premium", desc: "Nylon, poliéster, cuero ecológico o materiales sostenibles." },
  { icon: FileText, title: "Diseño exclusivo", desc: "Creamos un diseño único que refleje la identidad de tu marca." },
  { icon: Package, title: "Packaging corporativo", desc: "Empaques personalizados, cajas y presentaciones para eventos." },
  { icon: Sparkles, title: "Ediciones limitadas", desc: "Diseños únicos para campañas especiales y fechas corporativas." },
];

const STEPS = [
  { num: "01", title: "Consulta", desc: "Comparte tu visión y requerimientos. Analizamos tu marca y necesidades para crear una propuesta a medida." },
  { num: "02", title: "Diseño", desc: "Creamos prototipos personalizados con tu logo, colores y materiales. Aprobación antes de producir." },
  { num: "03", title: "Producción", desc: "Fabricamos con control de calidad riguroso y materiales premium en nuestra planta." },
  { num: "04", title: "Entrega", desc: "Logística coordinada y entrega puntual en la fecha acordada. Seguimiento en tiempo real." },
];

export default function Personalizacion() {
  useEffect(() => {
    document.title = "Personalización | Mochilas Publicitarias";
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#6B6B6B] via-[#6B6B6B] to-[#6B6B6B] py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-[#1A1A1A] rounded-full animate-pulse" />
            <span className="font-body text-xs text-white/70 tracking-wider uppercase">Personalización</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Diseñado a la medida
            <br />
            <span className="text-[#1A1A1A]">de tu empresa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-body text-lg text-white/50 max-w-xl mx-auto"
          >
            Cada mochila es una extensión de tu marca. Ofrecemos opciones completas de personalización.
          </motion.p>
        </div>
      </section>

      {/* Options */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4 block">
                Opciones de personalización
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#6B6B6B] leading-tight">
                Cada detalle importa
              </h2>
              <div className="mt-4 w-12 h-1 bg-[#1A1A1A] rounded-full" />
              <p className="mt-6 font-body text-gray-500 leading-relaxed">
                Desde el color hasta el packaging final, cada aspecto de tu mochila
                puede ser personalizado para reflejar la identidad de tu empresa.
              </p>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white font-body text-sm rounded-lg hover:bg-[#1E1E1E] transition-colors"
              >
                Solicitar muestra gratis
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {OPTIONS.map((opt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 bg-gray-50 rounded-xl hover:bg-[#6B6B6B] transition-all duration-500 cursor-default"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1A1A1A] transition-colors duration-500 shadow-sm">
                    <opt.icon size={18} className="text-[#1A1A1A] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#6B6B6B] group-hover:text-white transition-colors duration-500">
                    {opt.title}
                  </h4>
                  <p className="mt-1 font-body text-xs text-gray-400 group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
                    {opt.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4 block">
              Nuestro proceso
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#6B6B6B]">
              De la idea a tu empresa
            </h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1A1A1A] rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-heading font-bold text-gray-100 mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#6B6B6B] mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-12 h-px bg-gray-200" />
                )}
              </motion.div>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#6B6B6B] text-white font-body text-sm rounded-lg hover:bg-[#6B6B6B] transition-colors"
            >
              Comenzar mi proyecto
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
