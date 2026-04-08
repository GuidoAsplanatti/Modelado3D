
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingCard from '@/components/PricingCard.jsx';
import { CheckCircle2, MapPin, Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ContactoPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === '#contacto-info' || hash === '#inversion') {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  const pricingPlans = [
    {
      name: 'Solicito Becas disponibles',
      description: 'Pago único con descuento especial',
      price: 50000,
      originalPrice: 110240,
      cta: 'Aplicar beca',
      href: '#inscripcion',
      features: [
        'Acceso completo al curso de 8 semanas',
        'Clases presenciales en Puerto Tec',
        'Tutorías virtuales personalizadas',
        'Contenido complementario en YouTube',
        'Certificación oficial',
        'Soporte durante todo el curso',
        'Descuento exclusivo Concordia Innova'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Inscripción - Modelado 3D de Arquitectura</title>
        <meta name="description" content="Inscríbete al curso de Modelado 3D de Arquitectura. Inversión completa $110.240 ARS o Beca Concordia Innova $49.998 ARS. Cupos limitados a 30 estudiantes." />
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
                Cupos Limitados
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Inscripción al curso
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
                Reserva tu lugar en el próximo curso. Solo 30 cupos disponibles
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

        {/* Pricing Section */}
        <section id="inversion" className="py-20 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


            <div className="flex justify-center max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="w-full max-w-md">
                  <PricingCard
                    plan={plan}
                    isRecommended={true}
                    index={index}
                  />
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-slate-200 max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#8BC756] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Certificación oficial incluida
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Al completar el curso, recibirás un certificado oficial emitido por la Municipalidad de Concordia, validando tus habilidades en modelado 3D y visualización arquitectónica.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="inscripcion" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                Formulario de inscripción
              </h2>
              <div className="flex flex-col items-center gap-2 mb-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Completa tus datos para reservar tu lugar
                </p>
                <Badge className="bg-slate-800 text-white border-none px-4 py-1.5 text-sm font-semibold shadow-md hover:bg-slate-900 transition-colors">
                  ⚠️ Cierre de inscripciones: 17 de Abril
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mt-8 bg-slate-50 border border-slate-200 rounded-3xl p-10 sm:p-16 shadow-xl max-w-4xl mx-auto"
            >
              <a
                href="https://forms.gle/tDu29h6MWC6Z9NGn6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button
                  className="w-full md:w-auto bg-[#8BC756] text-slate-900 hover:bg-[#7AB345] hover:scale-105 transition-all duration-300 text-lg sm:text-xl font-bold py-8 px-10 rounded-2xl shadow-[0_0_40px_rgba(139,199,86,0.3)] hover:shadow-[0_0_60px_rgba(139,199,86,0.5)] border border-[#8BC756]"
                >
                  Completar Formulario de Inscripción
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact Info */}
        <section id="contacto-info" className="py-20 bg-slate-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
                Información de contacto
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mx-auto">
                ¿Tienes preguntas? Contáctanos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center"
              >
                <div className="w-12 h-12 bg-[#8BC756] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Ubicación</h3>
                <p className="text-sm text-slate-600">
                  Puerto Tec<br />
                  Concordia, Entre Ríos
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center flex flex-col justify-center items-center"
              >
                <div className="w-12 h-12 bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Redes Sociales</h3>
                <a
                  href="https://www.instagram.com/concordia.innovacion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto"
                >
                  <Button className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white hover:scale-105 transition-transform duration-300 shadow-md border-0">
                    Escribinos por Instagram
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center"
              >
                <div className="w-12 h-12 bg-[#8BC756] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Teléfono</h3>
                <p className="text-sm text-slate-600">
                  +54 9 345 625-9608
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>


    </>
  );
};

export default ContactoPage;
