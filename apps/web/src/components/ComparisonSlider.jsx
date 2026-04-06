
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';

const ComparisonSlider = () => {
  const [position, setPosition] = useState(50);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden shadow-arch-lg group bg-slate-100"
    >
      {/* Right Image (After / Render) */}
      <img 
        src="/images/slider2.png" 
        alt="Render Final" 
        className="absolute inset-0 w-full h-full object-cover" 
        draggable="false" 
      />
      
      {/* Right Label */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-slate-900/70 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-lg pointer-events-none transition-opacity duration-300">
        Render Final
      </div>

      {/* Left Image (Before / Technical) - Clipped */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
      >
        <img 
          src="/images/slider1.png" 
          alt="Modelado 3D" 
          className="absolute inset-0 w-full h-full object-cover" 
          draggable="false" 
        />
        {/* Left Label */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-slate-900/70 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm md:text-base font-medium shadow-lg pointer-events-none">
          Modelado 3D
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none z-10" 
        style={{ left: `calc(${position}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-[#8BC756] group-hover:scale-110 transition-transform duration-200">
          <GripVertical className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>

      {/* Invisible Range Input for Accessibility and Interaction */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={position} 
        onChange={e => setPosition(e.target.value)} 
        aria-label="Comparador de imágenes antes y después" 
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0" 
      />
    </motion.div>
  );
};

export default ComparisonSlider;
