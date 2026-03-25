
import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Curso', path: '/curso' },
    { name: 'Instructor', path: '/instructor' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0369a1] flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">Modelado 3D</span>
                <span className="text-xs text-slate-400">Arquitectura</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Formación profesional en visualización arquitectónica con tecnologías de vanguardia e inteligencia artificial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold text-white tracking-wide uppercase mb-4 block">
              Enlaces rápidos
            </span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 hover:text-[#0369a1] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-sm font-semibold text-white tracking-wide uppercase mb-4 block">
              Contacto
            </span>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-[#0369a1] flex-shrink-0 mt-0.5" />
                <span>Puerto Tec, Concordia, Entre Ríos</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-[#0369a1] flex-shrink-0 mt-0.5" />
                <span>info@modelado3d.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-[#0369a1] flex-shrink-0 mt-0.5" />
                <span>+54 9 345 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <span className="text-sm font-semibold text-white tracking-wide uppercase mb-4 block">
              Síguenos
            </span>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-[#0369a1] transition-all duration-200 active:scale-[0.98]"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Modelado 3D Arquitectura. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/privacidad" className="text-sm text-slate-400 hover:text-[#0369a1] transition-colors duration-200">
                Política de privacidad
              </Link>
              <Link to="/terminos" className="text-sm text-slate-400 hover:text-[#0369a1] transition-colors duration-200">
                Términos de servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
