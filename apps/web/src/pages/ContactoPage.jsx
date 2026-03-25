
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PricingCard from '@/components/PricingCard.jsx';
import { CheckCircle2, MapPin, Mail, Phone, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    background: '',
    bankTransferConfirmed: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const pricingPlans = [
    {
      name: 'Inversión completa',
      description: 'Pago único sin descuentos',
      price: 110240,
      cta: 'No disponible',
      disabled: true,
      features: [
        'Acceso completo al curso de 8 semanas',
        'Clases presenciales en Puerto Tec',
        'Tutorías virtuales personalizadas',
        'Contenido complementario en YouTube',
        'Certificación oficial',
        'Soporte durante todo el curso'
      ]
    },
    {
      name: 'Beca Concordia Innova',
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, background: value }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({ ...prev, bankTransferConfirmed: checked }));
  };

  const handleSubmit = (e) => {
    if (!formData.bankTransferConfirmed) {
      e.preventDefault();
      setShowModal(true);
      return;
    }
    if (!formData.background) {
      e.preventDefault();
      alert('Por favor selecciona tu formación profesional.');
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <>
      <Helmet>
        <title>Inscripción - Modelado 3D de Arquitectura</title>
        <meta name="description" content="Inscríbete al curso de Modelado 3D de Arquitectura. Inversión completa $110.240 ARS o Beca Concordia Innova $49.998 ARS. Cupos limitados a 25 estudiantes." />
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
                Cupos Limitados
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Inscripción al curso
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                Reserva tu lugar en el próximo curso. Solo 25 cupos disponibles
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
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
                Opciones de inversión
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Elige el plan que mejor se adapte a tus necesidades
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <PricingCard
                  key={index}
                  plan={plan}
                  isRecommended={index === 1}
                  index={index}
                />
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
                <CheckCircle2 className="w-6 h-6 text-[#0369a1] flex-shrink-0 mt-1" />
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
              <p className="text-lg text-slate-600 leading-relaxed">
                Completa tus datos para reservar tu lugar
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  Inscripción enviada correctamente
                </h3>
                <p className="text-base text-green-700 mb-6 leading-relaxed">
                  Hemos recibido tu solicitud de inscripción. Te contactaremos en las próximas 24-48 horas para confirmar tu lugar y enviarte los detalles de pago.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  Enviar otra inscripción
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                action="https://formsubmit.co/guidoasplanatti@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
              >
                <div className="space-y-6">
                  <input type="hidden" name="_cc" value="CORREO_MUNICIPIO_AQUI@gmail.com" />
                  <input type="hidden" name="_subject" value="Formulario Curso Modelado 3D" />
                  <input type="hidden" name="_next" value="http://localhost:3000/gracias" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_honey" style={{ display: 'none' }} />
                  <input type="hidden" name="Formación Profesional" value={formData.background} />
                  <input type="hidden" name="Confirma tener Computadora" value={formData.bankTransferConfirmed ? "Si" : "No"} />

                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-slate-900">
                      Nombre completo *
                    </Label>
                    <Input
                      id="name"
                      name="Nombre Completo"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Tu nombre completo"
                      required
                      className="mt-2 bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-900">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="tu@email.com"
                      required
                      className="mt-2 bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-900">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      name="Teléfono"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+54 9 345 123-4567"
                      required
                      className="mt-2 bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Background */}
                  <div>
                    <Label htmlFor="background" className="text-sm font-medium text-slate-900">
                      Formación profesional *
                    </Label>
                    <Select value={formData.background} onValueChange={handleSelectChange}>
                      <SelectTrigger className="mt-2 bg-white text-slate-900">
                        <SelectValue placeholder="Selecciona tu formación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="architect">Arquitecto/a</SelectItem>
                        <SelectItem value="engineer">Ingeniero/a</SelectItem>
                        <SelectItem value="student">Estudiante</SelectItem>
                        <SelectItem value="designer">Diseñador/a</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-900">
                      Mensaje adicional (opcional)
                    </Label>
                    <Textarea
                      id="message"
                      name="Mensaje Adicional"
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="¿Tienes alguna pregunta o comentario?"
                      rows={4}
                      className="mt-2 bg-white text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Bank Transfer Confirmation */}
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                    <Checkbox
                      id="bankTransfer"
                      checked={formData.bankTransferConfirmed}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor="bankTransfer"
                        className="text-sm font-medium text-slate-900 cursor-pointer"
                      >
                        Confirmo que cuento con PC y o Notebook para la realización del curso*
                      </Label>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Al marcar esta casilla, confirmas que tienes computadora personal para la realización del curso. Este curso brinda un espacio común presencial pero no designa computadoras para trabajar.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    {isSubmitting ? 'Cargando...' : 'Enviar inscripción'}
                  </Button>

                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    Al enviar este formulario, aceptas nuestros términos de servicio y política de privacidad
                  </p>
                </div>
              </motion.form>
            )}
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-slate-50">
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
              <p className="text-lg text-slate-600 leading-relaxed">
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
                <div className="w-12 h-12 bg-[#0369a1] rounded-xl flex items-center justify-center mx-auto mb-4">
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center"
              >
                <div className="w-12 h-12 bg-[#0369a1] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-sm text-slate-600">
                  info@modelado3d.com
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 text-center"
              >
                <div className="w-12 h-12 bg-[#0369a1] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Teléfono</h3>
                <p className="text-sm text-slate-600">
                  +54 9 345 123-4567
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* PC Requirement Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl relative"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-[#0369a1]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Atención: Requisito de PC
              </h3>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Es obligatorio contar con una computadora propia para realizar el curso. Por favor, marca la casilla para continuar.
              </p>
              <Button
                onClick={() => setShowModal(false)}
                className="w-full bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98]"
                size="lg"
              >
                Entendido
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ContactoPage;
