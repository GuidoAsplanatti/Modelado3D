import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const GraciasPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>¡Registro Exitoso! - Modelado 3D de Arquitectura</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 max-w-lg w-full text-center"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>
            ¡Registro Exitoso!
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Gracias por inscribirte. Nos pondremos en contacto contigo pronto para brindarte los detalles del curso.
          </p>
          
          <p className="text-sm text-slate-500 mb-8">
            Serás redirigido al inicio en 4 segundos...
          </p>

          <Link 
            to="/"
            className="inline-block w-full py-3 px-6 bg-[#0369a1] text-white font-medium rounded-xl hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98]"
          >
            Volver al inicio ahora
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default GraciasPage;
