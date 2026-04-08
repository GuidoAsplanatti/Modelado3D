import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import ComparisonSlider from '@/components/ComparisonSlider.jsx';
import { Calendar, Users, MapPin, Clock, Sparkles, Zap, Award } from 'lucide-react';
import { motion, useMotionValue } from 'framer-motion';

const HomePage = () => {
  const carouselRef = useRef(null);
  const x = useMotionValue(0);

  const images = [
    '/images/proyecto5.jpg',
    '/images/bano.jpeg',
    '/images/procesoRender/CasaH1.png',
    '/images/procesoRender/CasaH2.png',
    '/images/procesoRender/CasaH3.png',
    '/images/proyecto5.jpg',
    '/images/bano.jpeg',
    '/images/procesoRender/CasaH1.png',
    '/images/procesoRender/CasaH2.png',
    '/images/procesoRender/CasaH3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const currentX = x.get();
        const itemWidth = 600 + 24; // Width + Gap
        const maxScroll = -(images.length / 2 * itemWidth);

        let newX = currentX - 1; // Slow constant scroll
        if (newX <= maxScroll) {
          newX = 0; // Reset
        }
        x.set(newX);
      }
    }, 30); // ~33fps

    return () => clearInterval(interval);
  }, [images.length, x]);

  const features = [{
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: 'Workflow optimizado con IA',
    description: 'Integra Gemini AI en tu proceso de diseño para acelerar la generación de Renders, materiales y post-procesado fotorrealista.'
  }, {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Metodología B-Learning',
    description: 'Combina clases presenciales, tutorías virtuales y contenido en YouTube para un aprendizaje flexible y completo.'
  }, {
    icon: <Award className="w-6 h-6 text-white" />,
    title: 'Portfolio profesional',
    description: 'Desarrolla 3 proyectos completos desde bocetos hasta renders finales listos para Behance y tu portafolio profesional.'
  }];

  const projects = [{
    name: 'Casa H',
    description: 'Proyecto inicial para dominar el workflow completo y la generación de fachadas asistida por IA.',
    deliverables: ['Modelado 3D base', 'Recorridos virtuales', 'Renders y Post-procesado con IA'],
    image: '/images/proyecto1.jpg'
  }, {
    name: 'Depto ARCO',
    description: 'Proyecto avanzado enfocado en interiores fotorrealistas, iluminación IES y materialidad PBR.',
    deliverables: ['Iluminación profesional IES', 'Materiales PBR avanzados', 'Cortes y escenas de cámara'],
    image: '/images/proyecto2.jpg'
  }, {
    name: 'Edificio ARCO',
    description: 'Proyecto de gran escala para gestión profesional, etiquetado y presentación en Behance.',
    deliverables: ['Gestión de proyectos complejo', 'Optimización de modelos grandes', 'Portfolio en Behance con Figma'],
    image: '/images/proyecto3.jpg'
  }];

  const logistics = [{
    icon: <MapPin className="w-5 h-5 text-[#8BC756]" />,
    label: 'Ubicación',
    value: 'Puerto Tec, Concordia'
  }, {
    icon: <Calendar className="w-5 h-5 text-[#8BC756]" />,
    label: 'Inicio de clases',
    value: 'Jueves 23 de Abril'
  }, {
    icon: <Clock className="w-5 h-5 text-[#8BC756]" />,
    label: 'Horarios',
    isCustom: true,
    value: (
      <div className="space-y-1">
        <div>
          <span className="block">Jueves Presencial</span>
          <span className="text-slate-600 font-normal">de 14:30 a 17:00 hs</span>
        </div>
        <hr className="border-slate-200 my-2" />
        <div>
          <span className="block">Martes Virtual</span>
          <span className="text-slate-600 font-normal">de 14:30 a 16:00 hs</span>
        </div>
      </div>
    )
  }, {
    icon: <Zap className="w-5 h-5 text-[#8BC756]" />,
    label: 'Cierre inscripciones',
    value: '17 de Abril'
  }];

  return (
    <>
      <Helmet>
        <title>Modelado 3D de Arquitectura</title>
        <meta name="description" content="Domina un workflow senior optimizado integrando Modelado 3D, Recorridos Virtuales, Post-procesado y Gemini AI. Curso intensivo de 8 semanas en Puerto Tec, Concordia." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/portada.jpg" alt="Modelado 3D arquitectónico profesional" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-[#8BC756]/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8
            }} className="text-center">
              <Badge className="mb-6 bg-[#8BC756] text-slate-900 hover:bg-[#6A9941] text-sm px-4 py-1">
                Curso Intensivo 8 Semanas
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{
                letterSpacing: '-0.02em'
              }}>
                Diseña con IA, sorprende con 3D.<br />
                Modelado 3D de Arquitectura
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Domina un workflow senior optimizado integrando Modelado 3D, Recorridos Virtuales, Post-procesado y Gemini AI
              </p>
              <div className="flex flex-col items-center gap-4 mb-10 opacity-90">
                <span className="text-slate-300 text-sm font-medium">Con el apoyo y acompañamiento de</span>
                <div className="flex justify-center items-center gap-8">
                  <img src="/images/logos/innovaVerde.png" alt="Innova Logo" className="h-12 md:h-16 w-auto object-contain brightness-0 invert" />
                  <img src="/images/logos/ConcordiaVerde.png" alt="Municipalidad Concordia Logo" className="h-12 md:h-16 w-auto object-contain brightness-0 invert" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="bg-[#8BC756] text-slate-900 hover:bg-[#6A9941] transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6">
                  <Link to="/contacto#inversion">Inscribirse ahora</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6">
                  <Link to="/curso">Ver programa completo</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium">
                <span className="text-slate-300">Inicio de clases: <span className="text-white">23 de Abril</span></span>
                <span className="text-[#8BC756]">Cierre de inscripciones: <span className="text-white underline decoration-[#8BC756]/50 underline-offset-4 font-bold">17 de Abril</span></span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Slider Section */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                Del Modelo 3D al Render Fotorrealista
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Observa la precisión del modelado 3D y la potencia del renderizado final con IA. En el curso aprenderás a transformar geometría en imágenes de alto impacto.
              </p>
            </motion.div>

            <ComparisonSlider />
          </div>
        </section>

        {/* Sponsors Section placeholder */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-slate-400 tracking-widest uppercase">patrocinadores</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-90 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="/images/logos/3dvision.png" alt="3D Vision Logo" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/images/logos/cauper.png" alt="Cauper Logo" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/images/logos/cafesg.png" alt="CAFESG Logo" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/images/logos/ferro.png" alt="Ferro Logo" className="h-16 md:h-20 w-auto object-contain" />
              <img src="/images/logos/ConcordiaVerdeVertical.png" alt="Municipalidad Concordia Logo" className="h-16 md:h-20 w-auto object-contain" />
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                Programa intensivo de 8 semanas
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Metodología B-Learning que combina clases presenciales, tutorías virtuales y contenido en YouTube para un aprendizaje completo y flexible
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => <FeatureCard key={index} feature={feature} index={index} />)}
            </div>
          </div>
        </section>

        {/* Key Projects - Zig-zag Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                3 proyectos completos de portfolio
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Desarrolla proyectos reales desde bocetos iniciales hasta renders fotorrealistas listos para tu portfolio profesional
              </p>
            </motion.div>

            <div className="space-y-24">
              {projects.map((project, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-6xl font-bold text-[#8BC756]" style={{
                      fontVariantNumeric: 'tabular-nums'
                    }}>
                      0{index + 1}
                    </span>
                    <Badge className="bg-[#8BC756] text-slate-900 hover:bg-[#6A9941]">
                      Proyecto {index + 1}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4" style={{
                    letterSpacing: '-0.02em'
                  }}>
                    {project.name}
                  </h3>
                  <p className="text-base text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <span className="text-sm font-semibold text-slate-900 tracking-wide uppercase block">
                      Aprenderemos
                    </span>
                    <ul className="space-y-2">
                      {project.deliverables.map((deliverable, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-[#8BC756] mt-1">•</span>
                        <span className="leading-relaxed">{deliverable}</span>
                      </li>)}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-arch-lg group relative">
                    <div className="absolute -inset-4 bg-[#8BC756]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <img src={project.image} alt={project.name} className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </motion.div>)}
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section className="py-20 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                Información del curso
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                8 Clases presenciales y 7 Clases Virtuales + Clases grabadas en Youtube
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {logistics.map((item, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#8BC756] transition-all duration-300 flex flex-col items-center text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex-shrink-0 text-[#8BC756]">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-400 tracking-wide uppercase block mb-2">
                      {item.label}
                    </span>
                    <div className="text-base text-slate-900 font-medium leading-tight">
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.div>)}
            </div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="mt-12 text-center">
              <Button asChild size="lg" className="bg-[#8BC756] text-slate-900 hover:bg-[#6A9941] transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6">
                <Link to="/contacto#inversion">Reservar mi lugar</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                Galería de Proyectos y Procesos
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Explora algunos de los trabajos realizados y el proceso de renderizado fotorrealista.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              ref={carouselRef}
              drag="x"
              dragConstraints={{ right: 0, left: -2000 }}
              style={{ x, width: 'max-content' }}
              className="flex gap-6 px-4 md:px-[calc((100vw-1280px)/2)] cursor-grab active:cursor-grabbing preserve-3d"
            >
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  className="w-[400px] md:w-[600px] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 bg-slate-100 border border-slate-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={src}
                    alt={`Proyecto ${index + 1}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;