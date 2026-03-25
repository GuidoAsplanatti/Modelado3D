import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import ComparisonSlider from '@/components/ComparisonSlider.jsx';
import { Calendar, Users, MapPin, Clock, Sparkles, Zap, Award } from 'lucide-react';
import { motion } from 'framer-motion';
const HomePage = () => {
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
    description: 'Proyecto de gran escala para gestión profesional, etiquetado técnico y presentación en Behance.',
    deliverables: ['Gestión de proyecto complejo', 'Tags profesionales', 'Portfolio en Behance'],
    image: '/images/proyecto3.jpg'
  }];
  const logistics = [{
    icon: <MapPin className="w-5 h-5 text-[#0369a1]" />,
    label: 'Ubicación',
    value: 'Puerto Tec, Concordia'
  }, {
    icon: <Calendar className="w-5 h-5 text-[#0369a1]" />,
    label: 'Duración',
    value: '8 semanas intensivas'
  }, {
    icon: <Clock className="w-5 h-5 text-[#0369a1]" />,
    label: 'Horarios',
    value: 'Martes 1:30h (Virtual) + Jueves 14:30-16:30hs (Presencial)'
  }, {
    icon: <Users className="w-5 h-5 text-[#0369a1]" />,
    label: 'Cupos',
    value: 'Limitado a 30 estudiantes'
  }];
  return <>
    <Helmet>
      <title>Modelado 3D de Arquitectura: De Bocetos a Portfolio Profesional con IA</title>
      <meta name="description" content="Domina un workflow senior optimizado integrando Modelado 3D, Recorridos Virtuales, V-Ray, Post-procesado y Gemini AI. Curso intensivo de 8 semanas en Puerto Tec, Concordia." />
    </Helmet>

    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/portada.jpg" alt="Modelado 3D arquitectónico profesional" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-[#0369a1]/70"></div>
        </div>

        {/* Hero Content */}
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
            <Badge className="mb-6 bg-[#0369a1] text-white hover:bg-[#0284c7] text-sm px-4 py-1">
              Curso Intensivo 8 Semanas
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{
              letterSpacing: '-0.02em'
            }}>
              Modelado 3D de Arquitectura:<br />
              De Bocetos a Portfolio Profesional con IA
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Domina un workflow senior optimizado integrando Modelado 3D, Recorridos Virtuales, V-Ray, Post-procesado y Gemini AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6">
                <Link to="/contacto">Inscribirse ahora</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6">
                <Link to="/curso">Ver programa completo</Link>
              </Button>
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
                  <span className="text-6xl font-bold text-[#0369a1]/20" style={{
                    fontVariantNumeric: 'tabular-nums'
                  }}>
                    0{index + 1}
                  </span>
                  <Badge className="bg-[#0369a1] text-white hover:bg-[#0284c7]">
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
                    Entregables clave
                  </span>
                  <ul className="space-y-2">
                    {project.deliverables.map((deliverable, idx) => <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-[#0369a1] mt-1">•</span>
                      <span className="leading-relaxed">{deliverable}</span>
                    </li>)}
                  </ul>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="aspect-video rounded-2xl overflow-hidden shadow-arch-lg group relative">
                  {index === 0 ? <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> : <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </motion.div>)}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="py-20 bg-slate-900 text-white">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
              letterSpacing: '-0.02em'
            }}>
              Información del curso
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Detalles de ubicación, horarios y modalidad de cursado
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
            }} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-[#0369a1] transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-400 tracking-wide uppercase block mb-1">
                    {item.label}
                  </span>
                  <span className="text-base text-white font-medium">
                    {item.value}
                  </span>
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
            <Button asChild size="lg" className="bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6">
              <Link to="/contacto">Reservar mi lugar</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Ubicación y Sede */}
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
          }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{
              letterSpacing: '-0.02em'
            }}>
              Ubicación y Sede
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nuestras clases presenciales se dictan en Puerto Tec, un espacio de innovación diseñado para el desarrollo tecnológico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
              <div className="rounded-2xl overflow-hidden shadow-arch-lg">
                <img src="/images/puertotecubi.jpg" alt="Puerto Tec Sede" className="w-full h-[330px] aspect-video object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
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
  </>;
};
export default HomePage;