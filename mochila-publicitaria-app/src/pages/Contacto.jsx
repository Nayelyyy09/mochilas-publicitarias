import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Clock, Send } from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contacto | Mochilas Publicitarias";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hola, soy ${formData.name} de ${formData.company}. ${formData.message}. Cantidad: ${formData.quantity} unidades.`
    );
    window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero banner */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-7.jpg"
          alt="Contacto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block text-white/70 text-xs tracking-[0.3em] uppercase mb-4">
              CONTACTO
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-wider">
              HABLEMOS.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-3xl text-[#1a1a2e] mb-8">
                SOLICITAR COTIZACIÓN
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-gray-500 tracking-wider mb-2 block uppercase">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a2e] font-body text-sm focus:outline-none focus:border-[#e94560] transition-colors rounded-lg"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 tracking-wider mb-2 block uppercase">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a2e] font-body text-sm focus:outline-none focus:border-[#e94560] transition-colors rounded-lg"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs text-gray-500 tracking-wider mb-2 block uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a2e] font-body text-sm focus:outline-none focus:border-[#e94560] transition-colors rounded-lg"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-gray-500 tracking-wider mb-2 block uppercase">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a2e] font-body text-sm focus:outline-none focus:border-[#e94560] transition-colors rounded-lg"
                      placeholder="999 999 999"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs text-gray-500 tracking-wider mb-2 block uppercase">
                    Cantidad
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a2e] font-body text-sm focus:outline-none focus:border-[#e94560] transition-colors rounded-lg"
                  >
                    <option value="">Selecciona</option>
                    <option value="50-100">50 - 100</option>
                    <option value="100-250">100 - 250</option>
                    <option value="250-500">250 - 500</option>
                    <option value="500-1000">500 - 1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs text-gray-500 tracking-wider mb-2 block uppercase">
                    Tu Proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#1a1a2e] font-body text-sm focus:outline-none focus:border-[#e94560] transition-colors resize-none rounded-lg"
                    placeholder="Describe tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 font-body text-sm font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 rounded-lg ${
                    submitted
                      ? "bg-[#00b894] text-white"
                      : "bg-[#e94560] text-white hover:bg-[#d63851]"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={16} />
                      ¡ENVIADO!
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      ENVIAR POR WHATSAPP
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="font-heading text-2xl text-[#1a1a2e] mb-8">
                INFORMACIÓN
              </h3>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "TELÉFONO", value: "+51 958 438 095", sub: "LUN - VIE 8:30AM - 6:30PM" },
                  { icon: Mail, label: "EMAIL", value: "ventas@mochilaspublicitarias.pe", sub: "RESPUESTA EN 24H" },
                  { icon: MapPin, label: "UBICACIÓN", value: "LIMA, PERÚ", sub: "LOS OLIVOS" },
                  { icon: Clock, label: "HORARIO", value: "8:30 - 6:30", sub: "LUNES A VIERNES" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100"
                  >
                    <div className="w-12 h-12 bg-[#e94560]/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#e94560]" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] text-gray-400 tracking-widest uppercase">{item.label}</p>
                      <p className="font-body text-base font-semibold text-[#1a1a2e]">{item.value}</p>
                      <p className="font-body text-xs text-gray-400">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-[#25d366]/10 rounded-xl border border-[#25d366]/20">
                <h4 className="font-body text-lg font-semibold text-[#1a1a2e] mb-2">WHATSAPP</h4>
                <p className="font-body text-sm text-gray-500 mb-4">
                  Respuesta inmediata.
                </p>
                <a
                  href="https://wa.me/51958438095?text=Hola,%20quiero%20cotizar%20mochilas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25d366] text-white font-body text-sm font-semibold rounded-lg hover:bg-[#1da851] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} />
                  ABRIR WHATSAPP
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
