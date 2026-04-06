
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-[#8BC756] flex items-center justify-center mb-6">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3" style={{letterSpacing: '-0.01em'}}>
        {feature.title}
      </h3>
      <p className="text-base text-slate-600 leading-relaxed flex-grow">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
