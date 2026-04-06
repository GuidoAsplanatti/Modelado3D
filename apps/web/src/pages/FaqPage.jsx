import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const faqData = [
    {
      question: "¿Cómo pago el curso y aseguro mi lugar?",
      answer: "Al inscribirte en esta web entrarás en una lista de espera para cubrir un máximo de 30 cupos. Te llegará un correo electrónico confirmando la reserva de tu lugar por 48 horas, junto con un formulario que contiene los datos para la transferencia bancaria. Deberás completar el formulario adjuntando el comprobante de pago. Una vez verificado, recibirás un correo de confirmación final con tu acceso al grupo y la invitación al repositorio de Drive con todo el material."
    },
    {
      question: "¿A qué tipo de público va dirigido?",
      answer: "El curso está pensado para estudiantes de arquitectura, diseño de interiores, técnicos constructores o cualquier persona interesada en la visualización arquitectónica. Solo se requieren **conocimientos mínimos** de computación (manejo básico de Windows/archivos); no es obligatorio tener experiencia previa en modelado 3D."
    },
    {
      question: "Si quedo fuera de los 30 cupos, ¿este curso se repetirá?",
      answer: "¡Sí! Si bien esta cohorte tiene cupos estrictamente limitados para garantizar una enseñanza personalizada, tenemos proyectado abrir nuevas ediciones. Te recomendamos completar la inscripción de todas formas para quedar en nuestra lista de prioridad para futuros lanzamientos."
    },
    {
      question: "¿El curso provee las licencias de los programas?",
      answer: "No, la organización no provee licencias oficiales de los softwares (SketchUp, Enscape, Photoshop). Sin embargo, durante las clases te guiaremos y enseñaremos las diferentes alternativas sobre cómo obtenerlas e instalarlas correctamente."
    },
    {
      question: "¿Qué requisitos técnicos necesito para cursar?",
      answer: "Es requisito excluyente asistir a las clases presenciales con **notebook propia**. Para un funcionamiento fluido de los motores de renderizado, sugerimos un equipo con procesador Core i3 / Ryzen 3 (o superior), un mínimo de 8GB de RAM y, en lo posible, una tarjeta gráfica dedicada."
    },
    {
      question: "¿Entregan certificado al finalizar?",
      answer: "Sí, al concluir los módulos y entregar los 3 proyectos prácticos, se otorgará un certificado digital avalado por la Dirección de Innovación y Economía del Conocimiento (DIEC) de la Municipalidad de Concordia y el instructor a cargo."
    }
  ];

  const faqItems = faqData.map((_, index) => `item-${index}`);

  const toggleAll = () => {
    if (expandedItems.length === faqItems.length) {
      setExpandedItems([]);
    } else {
      setExpandedItems(faqItems);
    }
  };

  const renderAnswer = (text) => {
    return text.split('**').map((part, index) =>
      index % 2 === 1 ? <strong key={index} className="font-bold text-slate-900">{part}</strong> : part
    );
  };

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes | Modelado 3D de Arquitectura</title>
        <meta name="description" content="Resolvemos todas tus dudas acerca del curso de Modelado 3D, requisitos de ingreso y modalidad." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
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
                Soporte y Dudas
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Preguntas Frecuentes
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
                Todo lo que necesitas saber antes de comenzar tu formación.
              </p>

              <div className="flex justify-center items-center gap-8 opacity-90">
                <img src="/images/logos/innovaVerde.png" alt="Innova Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
                <img src="/images/logos/ConcordiaVerde.png" alt="Municipalidad Concordia Logo" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleAll}
                className="text-slate-500 hover:text-[#0369a1] font-medium transition-colors"
              >
                {expandedItems.length === faqItems.length ? "Contraer todo" : "Expandir todo"}
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion
                type="multiple"
                value={expandedItems}
                onValueChange={setExpandedItems}
                className="w-full"
              >
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 group">
                    <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#0369a1] transition-colors duration-200 decoration-none">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed text-base">
                      {renderAnswer(item.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 text-center bg-slate-50 p-8 rounded-2xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">¿Tienes otra consulta?</h3>
              <p className="text-slate-600 mb-6">No dudes en ponerte en contacto directo con nosotros para resolver cualquier detalle antes de tu inscripción.</p>
              <Button asChild size="lg" className="bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200">
                <Link to="/contacto#contacto-info">Contactarnos</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FaqPage;
