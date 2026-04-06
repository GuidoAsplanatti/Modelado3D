
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';
import { BookOpen, Video, Users, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CursosPage = () => {
  const projects = [
    {
      name: 'Casa H',
      duration: 'Semanas 1-3',
      description: 'Proyecto inicial para dominar el workflow completo desde bocetos hasta renders finales. Aprende a integrar IA en la generación de fachadas y optimiza tu proceso de diseño.',
      deliverables: [
        'Modelado 3D base',
        'Renders fotorrealistas con Recorridos Virtuales',
        'Fachadas generadas y refinadas con Gemini AI',
        'Post-procesado básico'
      ]
    },
    {
      name: 'Depto ARCO',
      duration: 'Semanas 4-6',
      description: 'Proyecto avanzado enfocado en interiores fotorrealistas. Domina la iluminación profesional IES, materialidad PBR y técnicas avanzadas de post-procesado.',
      deliverables: [
        'Iluminación profesional con archivos IES',
        'Materiales PBR avanzados y texturas realistas',
        'Renders de interiores',
        'Post-procesado avanzado',
        'Composición y ajustes de color profesionales'
      ]
    },
    {
      name: 'Edificio ARCO',
      duration: 'Semanas 7-8',
      description: 'Proyecto de gran escala para gestión profesional de proyectos complejos. Aprende etiquetado, organización de archivos y presentación en Behance.',
      deliverables: [
        'Gestión de proyecto arquitectónico complejo',
        'Tags y etiquetado profesional',
        'Renders exteriores de gran escala',
        'Portfolio profesional en Behance',
        'Presentación ejecutiva del proyecto'
      ]
    }
  ];

  const methodology = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Clases presenciales',
      description: 'Jueves 14:30-16:30hs en Puerto Tec, Concordia. Trabajo práctico guiado y resolución de dudas en tiempo real.'
    },
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: 'Tutorías virtuales',
      description: 'Martes 1:30h. Seguimiento personalizado, revisión de avances y feedback individual sobre tus proyectos.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: 'Contenido en YouTube',
      description: 'Tutoriales complementarios, técnicas avanzadas y recursos adicionales disponibles 24/7.'
    }
  ];

  const outcomes = [
    'Dominar el workflow completo de visualización arquitectónica',
    'Integrar IA (Gemini) en el proceso de diseño y generación de fachadas',
    'Crear renders fotorrealistas con Recorridos Virtuales',
    'Aplicar iluminación profesional IES y materialidad PBR',
    'Realizar post-procesado avanzado',
    'Gestionar proyectos arquitectónicos complejos',
    'Desarrollar un portfolio profesional en Behance',
    'Obtener certificación oficial de la Municipalidad de Concordia'
  ];

  return (
    <>
      <Helmet>
        <title>Programa del Curso - Modelado 3D de Arquitectura</title>
        <meta name="description" content="Estructura detallada del curso de 8 semanas: 3 proyectos completos, metodología B-Learning, y certificación oficial. Aprende Modelado 3D, Recorridos Virtuales, Post-procesado y Gemini AI." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#8BC756] text-white overflow-hidden">
          <div className="absolute inset-0 concrete-texture opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                Programa Completo
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Estructura del curso
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
                8 semanas intensivas con 3 proyectos completos, metodología B-Learning y certificación oficial
              </p>

              <div className="flex justify-center items-center gap-8 opacity-90">
                <img src="/images/logos/innovaVerde.png" alt="Innova Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
                <img src="/images/logos/ConcordiaVerde.png" alt="Municipalidad Concordia Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Software Stack Section */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ letterSpacing: '-0.02em' }}>
                Software y Herramientas del Curso
              </h2>
            </div>
            <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
              {[
                { name: 'SketchUp', logo: 'sketchup', description: 'Dominio de modelado 3D arquitectónico, organización por etiquetas y componentes.' },
                { name: 'Enscape', logo: 'enscape', description: 'Renderizado en tiempo real, creación de recorridos virtuales fotorrealistas.' },
                { name: 'Gemini 3 Flash Image (Nano Banana 2)', logo: 'gemini', description: 'Integración de IA para generación de imágenes y post-procesado avanzado.' },
                { name: 'Photoshop', logo: 'photoshop', description: 'Post-producción de renders, ajuste de niveles, composición y montajes profesionales.' },
                { name: 'Figma', logo: 'figma', description: 'Diseño de presentaciones y organización de portfolio para Behance.' }
              ].map((software, index) => (
                <div key={index} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-full md:w-[240px] h-[120px] md:h-[160px] flex-shrink-0 bg-white border-b md:border-b-0 md:border-r-[1.5px] border-slate-100 p-8 flex items-center justify-center">
                    <img
                      src={`/images/logos/${software.logo}.png`}
                      alt={`${software.name} Logo`}
                      className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center bg-white">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{software.name}</h3>
                    <p className="text-slate-600 leading-relaxed">{software.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                3 proyectos de portfolio profesional
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Cada proyecto está diseñado para desarrollar habilidades específicas y construir tu portfolio desde cero
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                Metodología B-Learning
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Combina lo mejor de la educación presencial y virtual para un aprendizaje flexible y completo
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodology.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-arch-lg transition-all duration-300 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8BC756] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2" style={{ letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 bg-gradient-to-br from-[#8BC756]/5 to-[#6A9941]/5 rounded-2xl p-8 border border-[#8BC756]/20"
            >
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-[#8BC756] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Duración: 8 semanas intensivas
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Programa diseñado para llevarte desde los fundamentos hasta un nivel profesional en 2 meses. Cada semana incluye clases presenciales, tutorías virtuales y contenido complementario.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                Resultados de aprendizaje
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Al finalizar el curso, serás capaz de
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#8BC756] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-relaxed">{outcome}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#8BC756] text-slate-900 hover:bg-[#6A9941] transition-all duration-200 active:scale-[0.98] text-lg px-8 py-6"
              >
                <Link to="/contacto#inversion">Inscribirse ahora</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CursosPage;
