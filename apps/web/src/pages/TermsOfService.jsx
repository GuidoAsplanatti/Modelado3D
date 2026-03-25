import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | Modelado 3D Profesional</title>
        <meta name="description" content="Términos de servicio, políticas de pago y reglas de asistencia del curso de Modelado 3D." />
      </Helmet>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full mt-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Términos y Condiciones</h1>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Descripción del Servicio</h2>
                <p>
                  Los presentes términos regulan la inscripción y participación en el curso intensivo "Modelado 3D de Arquitectura: De Bocetos a Portfolio Profesional con IA", dictado bajo la modalidad B-Learning con una duración estipulada de 8 semanas.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Política de Precios y Pagos</h2>
                <p>
                  El valor total del curso es de <strong>$49.998 ARS</strong>.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>El pago debe realizarse en su totalidad o en las cuotas acordadas previas al inicio de cursada para asegurar el cupo (limitado a 30 estudiantes).</li>
                  <li>Nuestra política no admite reembolsos una vez el programa haya comenzado, dado que los cupos son estrictamente limitados y la vacante queda bloqueada.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Reglas de Asistencia y Modalidad</h2>
                <p>
                  El programa en formato B-Learning exige compromiso por parte del alumno para asegurar su aprendizaje:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Se requiere un mínimo de <strong>75% de asistencia</strong> a las clases presenciales (Jueves 14:30-16:30hs en Puerto Tec).</li>
                  <li>El estudiante se compromete a visualizar el contenido asincrónico y conectarse a las tutorías virtuales (Martes 1:30h) según el cronograma.</li>
                  <li>La no asistencia recurrente sin justificación validada limitará el acompañamiento de nuestros instructores.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Propiedad Intelectual</h2>
                <p>
                  Todo material entregado durante la cursada (modelos base, configuraciones de renderizado, material pedagógico) pertenece al equipo instructor y se proporciona únicamente para el uso educativo del cursante. Queda prohibida su re-venta o distribución pública. Los proyectos creados por el alumno formarán parte de su portfolio personal sin restricción.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Certificación</h2>
                <p>
                  La entrega del certificado final está sujeta al cumplimiento de las reglas de asistencia (punto 3), a la entrega de los 3 proyectos pautados a lo largo de las 8 semanas y al abono completo del precio del curso ($49.998 ARS).
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
