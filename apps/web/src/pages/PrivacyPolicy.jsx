import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Modelado 3D de Arquitectura</title>
        <meta name="description" content="Información detallada sobre el tratamiento de datos personales, privacidad y derechos de imagen para el curso de Modelado 3D." />
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
                Política de Privacidad
              </h1>
              
              <div className="space-y-10 text-slate-600 leading-relaxed">
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">1. Información General</h2>
                  <p>
                    De acuerdo con la Ley N° 25.326 de Protección de Datos Personales de la República Argentina, esta Política de Privacidad rige el tratamiento de la información personal de los usuarios que se inscriban o interactúen con nuestro curso de Modelado 3D de Arquitectura.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">2. Recopilación de Datos</h2>
                  <p>
                    Recopilamos la información personal necesaria para la gestión y prestación de los servicios educativos. Esto incluye, pero no se limita a: nombre completo, DNI, dirección de correo electrónico, número de teléfono y comprobantes de facturación/transferencia. Estos datos se recogen a través de los formularios de registro y contacto oficial.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">3. Uso de la Información</h2>
                  <p className="mb-4">
                    Los datos personales que recopilamos se utilizan exclusivamente para los siguientes fines:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#0369a1] font-bold">•</span>
                      <span>Inscripción y gestión administrativa del curso presencial.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0369a1] font-bold">•</span>
                      <span>Comunicación sobre horarios, tutorías, material de Drive y actualizaciones del contenido.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0369a1] font-bold">•</span>
                      <span>Procesamiento de pagos y control de cupos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#0369a1] font-bold">•</span>
                      <span>Intercambio de información básica (Nombre, Apellido y DNI) con la Dirección de Innovación y Economía del Conocimiento (DIEC) de la Municipalidad de Concordia a los fines exclusivos de la emisión y validación de los certificados oficiales.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">4. Protección y Seguridad</h2>
                  <p>
                    Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción. No compartimos ni vendemos su información personal a terceros para fines comerciales o de marketing.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">5. Derechos de Imagen y Trabajos (Portfolio)</h2>
                  <p>
                    Al participar del curso presencial en la sede de Puerto Tec, el alumno comprende que podrán tomarse fotografías o videos de registro documental. Asimismo, los renders y proyectos finales desarrollados en clase podrán ser exhibidos en nuestras redes o sitio web con fines puramente académicos y de promoción de futuras cohortes. El alumno puede solicitar la no publicación de su imagen o trabajos comunicándolo previamente a la organización.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">6. Sus Derechos</h2>
                  <p>
                    Usted tiene en todo momento el derecho a acceder, rectificar y actualizar sus datos personales, así como a solicitar la eliminación de los mismos de nuestra base de datos, siempre que esto no interfiera con las obligaciones administrativas y legales en curso (como la certificación del curso).
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

export default PrivacyPolicy;
