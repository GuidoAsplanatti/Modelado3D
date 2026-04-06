import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | Modelado 3D de Arquitectura</title>
        <meta name="description" content="Términos de servicio, política de precios, reglas de asistencia y propiedad intelectual del curso de Modelado 3D." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />

        <main className="flex-grow py-20 pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                Términos y Condiciones
              </h1>

              <div className="space-y-10 text-slate-600 leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">1. Descripción del Servicio</h2>
                  <p>
                    Los presentes términos regulan la inscripción y participación en el curso intensivo "Modelado 3D de Arquitectura: De Bocetos a Portfolio Profesional con IA", dictado bajo la modalidad B-Learning con una duración estipulada de 8 semanas.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">2. Política de Precios y Pagos</h2>
                  <p className="mb-4">
                    El valor total del curso es de <strong className="text-slate-900">$50.000 ARS</strong>.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#8BC756] font-bold">•</span>
                      <span>El pago debe realizarse en su totalidad o en las cuotas acordadas previas al inicio de la cursada para asegurar el cupo (limitado a un máximo de 30 estudiantes).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8BC756] font-bold">•</span>
                      <span>Nuestra política no admite reembolsos una vez el programa haya comenzado, dado que los cupos son estrictamente limitados y la vacante queda bloqueada para otros posibles asistentes.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">3. Reglas de Asistencia, Modalidad y Requisitos</h2>
                  <p className="mb-4">
                    El programa en formato B-Learning exige compromiso por parte del alumno para asegurar su aprendizaje:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#8BC756] font-bold">•</span>
                      <span><strong>Asistencia:</strong> Se requiere un mínimo de 75% de asistencia a las clases presenciales (Jueves 14:30 a 16:30hs en la sede de Puerto Tec).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8BC756] font-bold">•</span>
                      <span><strong>Compromiso Virtual:</strong> El estudiante se compromete a visualizar el contenido asincrónico y conectarse a las tutorías virtuales (Martes 14:30 a 16:00hs) según el cronograma establecido.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#8BC756] font-bold">•</span>
                      <span><strong>Requisitos Técnicos:</strong> Es obligación del alumno asistir a las clases presenciales con notebook propia. La organización y el instructor no proveen equipos informáticos ni licencias oficiales de los softwares utilizados durante la cursada.</span>
                    </li>
                  </ul>
                  <p className="mt-4 italic">
                    La no asistencia recurrente sin justificación validada limitará el acompañamiento de nuestros instructores.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">4. Propiedad Intelectual</h2>
                  <p>
                    Todo material entregado durante la cursada (modelos base, configuraciones de renderizado, material pedagógico, scripts) pertenece al equipo instructor y se proporciona únicamente para el uso educativo del cursante. Queda estrictamente prohibida su reventa o distribución pública. Los proyectos finales y renders creados por el alumno formarán parte de su portfolio personal sin ningún tipo de restricción.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">5. Certificación</h2>
                  <p>
                    La entrega del certificado final avalado por la Dirección de Innovación (DIEC) y el instructor está sujeta al cumplimiento de las reglas de asistencia detalladas en el punto 3, a la entrega en tiempo y forma de los 3 proyectos pautados a lo largo de las 8 semanas, y al abono completo del precio del curso ($50.000 ARS).
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
