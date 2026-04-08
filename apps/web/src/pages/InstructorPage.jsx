
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Award, Briefcase, GraduationCap, Sparkles, Code, Building2, Linkedin, Github, ExternalLink } from 'lucide-react';
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
      title: 'Técnico Universitario Programador',
      description: 'Recibido en la UTN FRCon desarrollo de herramientas para optimización de procesos'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: 'Estudiante de Ingeniería Civil',
      description: 'Formación técnica que enriquece la comprensión arquitectónica'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: 'Diseñador UX & UI',
      description: 'Enfoque en diseño centrado en el usuario, creando interfaces intuitivas, estéticas y funcionales'
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
    'Automatización de workflows'
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
                Instructor
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Guido Asplanatti
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Modelador 3D profesional, Técnico Universitario Programador y especialista en workflows de visualización arquitectónica con IA
              </p>

              <div className="flex flex-col items-center gap-4 mt-10 opacity-90">
                <span className="text-slate-300 text-sm font-medium">Con el apoyo y acompañamiento de</span>
                <div className="flex justify-center items-center gap-8">
                  <img src="/images/logos/innovaVerde.png" alt="Innova Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
                  <img src="/images/logos/ConcordiaVerde.png" alt="Municipalidad Concordia Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
                </div>
              </div>
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
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-arch-lg group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8BC756] to-[#6A9941] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
                  <img src="/images/guido.jpg" alt="Guido Asplanatti - Instructor" className="relative w-full h-full object-cover rounded-2xl shadow-lg border border-slate-100/50 backdrop-blur-sm" />
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
                    Con más de 50 proyectos de visualización arquitectónica completados, Guido ha desarrollado una metodología que combina técnicas tradicionales de modelado 3D con las últimas innovaciones en inteligencia artificial.
                  </p>
                  <p>
                    A esto se suma su experiencia práctica en el sector privado, donde ha estado a cargo de capacitar y guiar a pasantes dentro de la constructora.
                  </p>
                  <p>
                    Como programador, ha desarrollado herramientas y scripts personalizados para optimizar workflows, automatizar tareas repetitivas y maximizar la eficiencia en proyectos de gran escala. Esta experiencia le permite enseñar no solo cómo usar las herramientas, sino cómo pensar estratégicamente sobre el proceso completo.
                  </p>
                  <p>
                    Pionero en la integración de Gemini AI en workflows de visualización arquitectónica, Guido ha desarrollado técnicas innovadoras para acelerar la generación de fachadas, materiales y post-procesado, manteniendo siempre el control creativo y la calidad profesional.
                  </p>
                  <div className="pt-6 flex flex-wrap items-center gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#8BC756] text-slate-900 hover:bg-[#6A9941] transition-all duration-200 active:scale-[0.98]"
                    >
                      <a href="https://www.linkedin.com/in/asplanattiguido/" target="_blank" rel="noopener noreferrer">Visitar portfolio personal</a>
                    </Button>

                    <div className="flex items-center gap-3 ml-2">
                      <a href="https://www.linkedin.com/in/asplanattiguido/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#8BC756] hover:text-slate-900 transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="https://www.behance.net/guidoasp/projects" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#8BC756] hover:text-slate-900 transition-all duration-300">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 13.5h-4c0 .7.4 1 1 1 .5 0 .9-.2 1-.5h2c-.2 1.3-1.4 2.5-3 2.5-2.1 0-3-1.6-3-3s1-3 3-3c2.2 0 3 1.6 3 3zm-3-1.5c-.6 0-1 .3-1 .8h2c0-.5-.4-.8-1-.8zm-8 4.5h-4.5v-2H11v2zm0-3.5h-4.5V4h4c1.8 0 3 .8 3 2.5 0 1-.6 1.8-1.5 2.1.9.2 1.5 1 1.5 2.1 0 1.8-1.2 2.8-3 2.8zm-1.5-2V6.5h-1.5v2h1.5zm0 2.5V11 h-1.5v2h1.5zm11-10h-6V5h6v1zM0 0v24h24V0H0z" fill="none" />
                          <path d="M9.5 15.5h-5v-10h4.5c1.1 0 2 .5 2 1.5 0 .7-.4 1.1-1 1.3.8.2 1.5.8 1.5 1.7 0 1.5-1 2.5-2.5 2.5 h.5zM6 10h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H6v1zm0 4h2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H6v1zm10.5-3.5c-1.4 0-2.3.9-2.3 2.1s.9 2.1 2.3 2.1c1.2 0 2-.7 2.2-1.6h-1.3c-.1.2-.4.4-.9.4-.6 0-.9-.3-.9-.6h3v-.3c0-1.2-.9-2.1-2.1-2.1zm-.8 1.5c.1-.4.4-.6.8-.6s.7.2.8.6h-1.6zM14 6h5v1h-5V6z" />
                        </svg>
                      </a>
                      <a href="https://github.com/GuidoAsplanatti" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#8BC756] hover:text-slate-900 transition-all duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
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
                Una combinación única de habilidades técnicas y creativas.
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
                      <div className="w-12 h-12 rounded-xl bg-[#8BC756] flex items-center justify-center">
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
                  <Award className="w-5 h-5 text-[#8BC756] flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 bg-gradient-to-br from-[#8BC756]/5 to-[#6A9941]/5 rounded-2xl p-8 border border-[#8BC756]/20 text-center"
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
                className="bg-[#8BC756] text-slate-900 hover:bg-[#6A9941] transition-all duration-200 active:scale-[0.98]"
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
