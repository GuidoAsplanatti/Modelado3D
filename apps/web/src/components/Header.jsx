
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Curso', path: '/curso' },
    { name: 'Instructor', path: '/instructor' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#0369a1] flex items-center justify-center transition-all duration-200 group-hover:bg-[#0284c7]">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-slate-900">Modelado 3D</span>
              <span className="block text-xs text-slate-600">Arquitectura</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#0369a1] bg-[#0369a1]/10 border-b-2 border-[#0369a1]'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98]"
            >
              <Link to="/contacto">Inscribirse</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-[#0369a1] bg-[#0369a1]/10 border-l-4 border-[#0369a1]'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  asChild
                  className="mt-4 bg-[#0369a1] text-white hover:bg-[#0284c7] transition-all duration-200 active:scale-[0.98]"
                >
                  <Link to="/contacto" onClick={() => setIsOpen(false)}>
                    Inscribirse
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
