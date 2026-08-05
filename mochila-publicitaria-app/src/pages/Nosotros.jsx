import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Factory, Palette, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const STATS = [
  { n: "500+", l: "Empresas" },
  { n: "10K+", l: "Mochilas" },
  { n: "15+", l: "Años" },
  { n: "50+", l: "Modelos" },
];

const FEATURES = [
  { icon: Factory, title: "Fabricantes Directos", desc: "Sin intermediarios, mejores precios y tiempos de entrega rápidos" },
  { icon: Palette, title: "Personalización Total", desc: "Bordado, impresión y relief con tu logotipo corporativo" },
  { icon: Truck, title: "Envío a Todo Perú", desc: "Entregas seguras en Lima y todo el territorio nacional" },
  { icon: Shield, title: "Calidad Garantizada", desc: "Materiales premium y control de calidad en cada producto" },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "María González",
    role: "Directora de RRHH, TechCorp",
    text: "Las mochilas personalizadas superaron nuestras expectativas. Nuestros empleados las aman y se sienten valorados. La calidad es excepcional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Gerente General, InnovaGroup",
    text: "Excelente calidad y atención al detalle. Hemos encargado 500 unidades y todas llegaron perfectas. Definitivamente volveremos a pedir.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    role: "Coordinadora de Eventos, MegaCorp",
    text: "Las mochilas fueron el regalo perfecto para nuestra convención. Diseño elegante, funcional y con un precio muy competitivo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const CASES = [
  {
    title: "TechCorp - Convención Anual",
    description: "500 mochilas corporativas personalizadas con logo bordado para su convención de tecnología.",
    result: "98% de satisfacción entre asistentes",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-7.jpg",
  },
  {
    title: "MegaCorp - Onboarding",
    description: "Kits de bienvenida con mochila, tissues y artículos promocionales para nuevos empleados.",
    result: "Reducción del 40% en tiempo de inducción",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4-7.jpg",
  },
  {
    title: "InnovaGroup - Campaña de Marketing",
    description: "Edición limitada de mochilas para regalar a clientes VIP en su lanzamiento de producto.",
    result: "Incremento del 25% en retención de clientes",
    image: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-5-5.jpg",
  },
];

export default function Nosotros() {
  useEffect(() => {
    document.title = "Nosotros | Mochilas Publicitarias";
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
            <span className="font-body text-xs text-white/70 tracking-wider uppercase">Sobre nosotros</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Fabricantes directos
            <br />
            <span className="text-[#1A1A1A]">en Perú</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-body text-lg text-white/50 max-w-xl mx-auto"
          >
            Más de 15 años brindando soluciones de merchandising a empresas de todo el país.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-4xl lg:text-5xl font-bold text-[#1A1A1A]">{s.n}</p>
                <p className="mt-2 font-body text-sm text-gray-500">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4 block">
              ¿Por qué elegirnos?
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#6B6B6B]">
              Somos tu mejor opción
            </h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1A1A1A] rounded-full" />
          </motion.div>

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

      {/* Case Studies */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4 block">
              Casos de éxito
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#6B6B6B]">
              Resultados que hablan
            </h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1A1A1A] rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {CASES.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden bg-gray-50">
                  <img src={c.image} alt={c.title} className="w-full h-full object-contain p-4" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-[#6B6B6B] mb-2">{c.title}</h3>
                  <p className="font-body text-sm text-gray-500 mb-4">{c.description}</p>
                  <div className="px-3 py-2 bg-[#1A1A1A]/10 rounded-lg">
                    <p className="font-body text-sm font-medium text-[#1A1A1A]">{c.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#1A1A1A] mb-4 block">
              Testimonios
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#6B6B6B]">
              Lo que dicen nuestros clientes
            </h2>
            <div className="mt-4 mx-auto w-12 h-1 bg-[#1A1A1A] rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="font-body text-gray-500 leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-heading text-sm font-bold text-[#6B6B6B]">{t.name}</p>
                    <p className="font-body text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#6B6B6B]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white">
              ¿Tu empresa es la siguiente?
            </h2>
            <p className="mt-4 font-body text-white/50 max-w-lg mx-auto">
              Únete a las más de 500 empresas que ya confían en nosotros.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white font-body text-sm rounded-lg hover:bg-[#1E1E1E] transition-colors"
            >
              Contactar ahora
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
