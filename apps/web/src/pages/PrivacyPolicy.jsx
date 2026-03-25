import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Modelado 3D Profesional</title>
        <meta name="description" content="Política de privacidad y protección de datos para el curso de Modelado 3D." />
      </Helmet>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full mt-16">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Política de Privacidad</h1>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Información General</h2>
                <p>
                  De acuerdo con la ley de protección de datos personales de la República Argentina, esta Política de Privacidad rige el tratamiento de la información personal de los usuarios que se inscriban o interactúen con nuestro curso de Modelado 3D de Arquitectura.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Recopilación de Datos</h2>
                <p>
                  Recopilamos la información personal necesaria para la gestión y prestación de los servicios educativos. Esto incluye, pero no se limita a: nombre completo, dirección de correo electrónico, número de teléfono y datos de facturación.
                  Estos datos se recogen a través de los formularios de registro y contacto en nuestro sitio web.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Uso de la Información</h2>
                <p>
                  Los datos personales que recopilamos se utilizan exclusivamente para los siguientes fines:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Inscripción y gestión administrativa del curso de 8 semanas.</li>
                  <li>Comunicación sobre horarios, tutorías y actualizaciones del contenido.</li>
                  <li>Procesamiento de pagos y emisión de comprobantes.</li>
                  <li>Mejora continua de nuestros servicios educativos.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">4. Protección y Seguridad</h2>
                <p>
                  Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción. 
                  No compartimos ni vendemos su información personal a terceros para fines comerciales o de marketing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-800 mb-3">5. Sus Derechos</h2>
                <p>
                  Usted tiene en todo momento el derecho a acceder, rectificar y actualizar sus datos personales, así como a solicitar la eliminación de los mismos de nuestra base de datos, siempre que esto no interfiera con las obligaciones administrativas y legales en curso (como la certificación del curso).
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

export default PrivacyPolicy;
