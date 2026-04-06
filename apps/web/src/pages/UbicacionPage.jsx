import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';

const UbicacionPage = () => {
  return (
    <>
      <Helmet>
        <title>Ubicación | Modelado 3D de Arquitectura</title>
        <meta name="description" content="Conocé nuestra sede en Puerto Tec, un espacio de innovación en Concordia diseñado para el desarrollo tecnológico." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <Header />

        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-[#8BC756]/80 text-white overflow-hidden">
          <div className="absolute inset-0 concrete-texture opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg" style={{ letterSpacing: '-0.02em' }}>
                Nuestra Sede
              </h1>
              <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium mb-10">
                Un espacio de innovación diseñado para el aprendizaje continuo y el desarrollo tecnológico
              </p>

              <div className="flex justify-center items-center gap-8 opacity-90">
                <img src="/images/logos/innovaVerde.png" alt="Innova Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
                <img src="/images/logos/ConcordiaVerde.png" alt="Municipalidad Concordia Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
              </div>
            </motion.div>
          </div>
        </section>



        {/* Venue Images Section - Zig Zag Layout */}
        <section className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {/* Item 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-arch-lg group bg-white border border-slate-200"
              >
                <img src="/images/puertotec/tec1.png" alt="Puerto Tec Exterior" className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">Espacios de Innovación</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Una sede equipada con tecnología de punta en el corazón de Concordia, preparada para recibir a la próxima generación de profesionales 3D. Contamos con infraestructura moderna diseñada para el alto rendimiento.
                </p>
              </motion.div>
            </div>

            {/* Item 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:order-1 space-y-6"
              >
                <h2 className="text-3xl font-bold text-slate-900 leading-tight">Clima Colaborativo</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Espacios diseñados para fomentar la creatividad y el trabajo colaborativo, con todo el soporte técnico necesario para tu aprendizaje.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:order-2 relative rounded-2xl overflow-hidden shadow-arch-lg group bg-white border border-slate-200"
              >
                <img src="/images/puertotec/tec2.png" alt="Puerto Tec Interior" className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ubicación y Sede Block (moved from Home) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                Ubicación y Sede
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Nuestras clases presenciales se dictan en Puerto Tec, Concordia.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="rounded-2xl overflow-hidden shadow-arch-lg">
                  <img src="/images/puertotecubi.jpg" alt="Puerto Tec Sede" className="w-full h-[330px] aspect-video object-cover" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <a
                  href="https://maps.app.goo.gl/U56vPBuRHqBjo2Q2A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden group"
                >
                  <img
                    src="/images/map.png"
                    alt="Ubicación en Google Maps"
                    className="w-full h-[330px] object-cover rounded-2xl shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 py-3 px-4 text-center">
                    <p className="text-white text-sm font-medium tracking-wide">
                      Hacé clic para ver en Google Maps
                    </p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default UbicacionPage;
