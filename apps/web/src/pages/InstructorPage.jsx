
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Award, Briefcase, GraduationCap, Sparkles, Code, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const InstructorPage = () => {
  const credentials = [
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: 'Modelador 3D profesional',
      description: 'Más de 50 proyectos de visualización arquitectónica completados para estudios y clientes independientes'
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: 'Técnico Programador',
      description: 'Recibido en la UTN FRCon desarrollo de herramientas para optimización de procesos'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: 'Estudiante de Ingeniería Civil',
      description: 'Formación técnica en estructuras y construcción que enriquece la comprensión arquitectónica'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: 'Especialista en IA aplicada',
      description: 'Pionero en la integración de Gemini AI y otras herramientas de IA en workflows de visualización arquitectónica'
    }
  ];

  const expertise = [
    'Modelado 3D arquitectónico avanzado',
    'Renders fotorrealistas con Recorridos Virtuales',
    'Edición y Post-procesado',
    'Integración de IA (Gemini) en diseño arquitectónico',
    'Iluminación profesional IES y materialidad PBR',
    'Gestión de proyectos complejos de gran escala',
    'Desarrollo de portfolios profesionales en Behance',
    'Automatización de workflows con programación'
  ];

  return (
    <>
      <Helmet>
        <title>Guido Asplanatti - Instructor | Modelado 3D de Arquitectura</title>
        <meta name="description" content="Conoce a Guido Asplanatti: Modelador 3D profesional, programador y estudiante de Ingeniería Civil. Más de 50 proyectos de visualización arquitectónica y especialista en workflows con IA." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0369a1] text-white overflow-hidden">
          <div className="absolute inset-0 concrete-texture opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm">
                Instructor
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Guido Asplanatti
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Modelador 3D profesional, programador y especialista en workflows de visualización arquitectónica con IA
              </p>
            </motion.div>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-arch-lg overflow-hidden">
                  <img src="/images/guido.jpg" alt="Guido Asplanatti - Instructor" className="w-full h-full object-cover rounded-2xl shadow-lg" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Experiencia profesional
                </h2>
                <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                  <p>
                    Con más de 50 proyectos de visualización arquitectónica completados, Guido ha desarrollado una metodología única que combina técnicas tradicionales de modelado 3D con las últimas innovaciones en inteligencia artificial.
                  </p>
                  <p>
                    Su formación como estudiante de Ingeniería Civil le proporciona una comprensión profunda de las estructuras y la construcción, lo que se refleja en la precisión técnica de sus renders y en su capacidad para enseñar no solo las herramientas, sino también los principios arquitectónicos fundamentales.
                  </p>
                  <p>
                    Como programador, ha desarrollado herramientas y scripts personalizados para optimizar workflows, automatizar tareas repetitivas y maximizar la eficiencia en proyectos de gran escala. Esta experiencia le permite enseñar no solo cómo usar las herramientas, sino cómo pensar estratégicamente sobre el proceso completo.
                  </p>
                  <p>
                    Pionero en la integración de Gemini AI en workflows de visualización arquitectónica, Guido ha desarrollado técnicas innovadoras para acelerar la generación de fachadas, materiales y post-procesado, manteniendo siempre el control creativo y la calidad profesional.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Credentials */}
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
                Credenciales y especialidades
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Una combinación única de habilidades técnicas, creativas y pedagógicas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-arch-lg transition-all duration-300 border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#0369a1] flex items-center justify-center">
                        {credential.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2" style={{ letterSpacing: '-0.01em' }}>
                        {credential.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
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
                Áreas de expertise
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Habilidades técnicas que se enseñan en el curso
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {expertise.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors duration-200"
                >
                  <Award className="w-5 h-5 text-[#0369a1] flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-gradient-to-br from-[#0369a1]/5 to-[#0284c7]/5 rounded-2xl p-8 border border-[#0369a1]/20 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Aprende de un profesional activo
              </h3>
              <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto mb-6">
                Guido no solo enseña teoría: comparte técnicas, workflows y mejores prácticas que utiliza activamente en proyectos reales. Cada clase está diseñada para que aprendas habilidades directamente aplicables al mercado profesional.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98]"
              >
                <Link to="/contacto">Inscribirse al curso</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default InstructorPage;
