
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Building } from 'lucide-react';

const GaleriaPage = () => {
  const section1Images = [
    { url: 'https://images.unsplash.com/photo-1701202779560-80aa8df53ae1', caption: 'Render en tiempo real' },
    { url: 'https://images.unsplash.com/photo-1690022603130-737af913be1a', caption: 'Iteración con IA' },
    { url: 'https://images.unsplash.com/photo-1694182155733-59ecf6fd5335', caption: 'Propuesta de fachada' },
    { url: 'https://images.unsplash.com/photo-1605635542656-e55904583b22', caption: 'Volumen base' }
  ];

  const section2Images = [
    { 
      url: 'https://images.unsplash.com/photo-1660560871501-62c7e8c7bf74', 
      caption: 'Materialidad PBR',
      description: 'Aplicación de texturas con propiedades físicas reales (Physically Based Rendering) para lograr superficies que reaccionan a la luz de manera natural, desde maderas porosas hasta metales pulidos.'
    },
    { 
      url: 'https://images.unsplash.com/photo-1676252455107-96c0068d4a07', 
      caption: 'Iluminación IES',
      description: 'Configuración de perfiles de iluminación fotométrica (IES) que simulan el comportamiento exacto de luminarias reales, creando atmósferas cálidas y precisas en espacios interiores.'
    },
    { 
      url: 'https://images.unsplash.com/photo-1592494804071-faea15d93a8a', 
      caption: 'Post-procesado digital',
      description: 'Técnicas avanzadas en post-procesado para ajustar contrastes, corregir color, añadir elementos de ambientación (entourage) y potenciar el impacto visual del render crudo.'
    },
    { 
      url: 'https://images.unsplash.com/photo-1674822968845-2feff8cac23f', 
      caption: 'Render fotorrealista',
      description: 'El resultado final de la integración de modelado preciso, materiales PBR, iluminación calculada y post-procesado, logrando una imagen lista para presentaciones comerciales.'
    }
  ];

  const section3Images = [
    { url: 'https://images.unsplash.com/photo-1700757924713-70ba6310e511', caption: 'Modelo completo' },
    { url: 'https://images.unsplash.com/photo-1689628805553-650eca58a856', caption: 'Planta baja' },
    { url: 'https://images.unsplash.com/photo-1574384744598-3319c9219899', caption: 'Primer piso' },
    { url: 'https://images.unsplash.com/photo-1512029998526-0b81facb358a', caption: 'Presentación Behance' }
  ];

  const CtaGroup = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
    >
      <Button 
        asChild
        size="lg"
        className="bg-[#0369a1] text-white hover:bg-[#0284c7] hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-[0.98] text-base px-8 py-6 w-full sm:w-auto"
      >
        <Link to="/contacto">
          Quiero aprender esto
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
      <Button 
        asChild
        size="lg"
        variant="outline"
        className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:scale-105 transition-all duration-300 active:scale-[0.98] text-base px-8 py-6 w-full sm:w-auto"
      >
        <Link to="/curso">Ver Plan de Estudios</Link>
      </Button>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Galería de Proyectos | Modelado 3D de Arquitectura</title>
        <meta name="description" content="Visualiza tu futuro profesional. Un recorrido por los proyectos reales que desarrollarás durante las 8 semanas de capacitación en modelado 3D y renderizado." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Fondo arquitectónico"
              className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-[#0369a1]/20 text-[#0369a1] border border-[#0369a1]/30 hover:bg-[#0369a1]/30 text-sm px-4 py-1 backdrop-blur-sm">
                Portfolio de Alumnos
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{letterSpacing: '-0.02em'}}>
                Visualiza tu Futuro Profesional
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Un recorrido por los proyectos reales que desarrollarás durante las 8 semanas de capacitación
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1: Casa H */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center max-w-3xl mx-auto"
            >
              <div className="w-16 h-16 bg-[#0369a1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#0369a1]" />
              </div>
              <h2 className="text-sm font-bold text-[#0369a1] tracking-widest uppercase mb-3">
                El Inicio (Casa H)
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6" style={{letterSpacing: '-0.02em'}}>
                Modelado Base e IA Conceptual
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                De volúmenes simples en Modelado 3D a propuestas de fachadas generadas con Inteligencia Artificial (Gemini). Verás cómo la tecnología agiliza tus decisiones de diseño desde el primer día.
              </p>
            </motion.div>

            <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
              {section1Images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.caption}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <CtaGroup />
          </div>
        </section>

        {/* Section 2: Depto ARCO */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center max-w-3xl mx-auto"
            >
              <div className="w-16 h-16 bg-[#0369a1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Layers className="w-8 h-8 text-[#0369a1]" />
              </div>
              <h2 className="text-sm font-bold text-[#0369a1] tracking-widest uppercase mb-3">
                El Detalle (Depto ARCO)
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6" style={{letterSpacing: '-0.02em'}}>
                Interiorismo y Realismo Fotorrealista
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Exploración de materiales PBR, iluminación artificial avanzada (luces IES) y post-procesado. Aprenderás a crear atmósferas que venden sensaciones, no solo espacios.
              </p>
            </motion.div>

            <div className="space-y-24">
              {section2Images.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold text-slate-200" style={{fontVariantNumeric: 'tabular-nums'}}>
                        0{index + 1}
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900" style={{letterSpacing: '-0.01em'}}>
                        {item.caption}
                      </h4>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative rounded-2xl overflow-hidden shadow-arch-lg group">
                      <img 
                        src={item.url} 
                        alt={item.caption} 
                        className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <CtaGroup />
            </div>
          </div>
        </section>

        {/* Section 3: Edificio ARCO */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center max-w-3xl mx-auto"
            >
              <div className="w-16 h-16 bg-[#0369a1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-[#0369a1]" />
              </div>
              <h2 className="text-sm font-bold text-[#0369a1] tracking-widest uppercase mb-3">
                La Escala (Edificio ARCO)
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6" style={{letterSpacing: '-0.02em'}}>
                Gestión Macro y Presentación de Portfolio
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Gestión de modelos de alta complejidad (PB + 3 pisos) organizados por Etiquetas (Tags). Culminación del proceso con un caso de estudio profesional listo para publicar en Behance.
              </p>
            </motion.div>

            <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
              {section3Images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {img.caption}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <CtaGroup />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default GaleriaPage;
