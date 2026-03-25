
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full rounded-2xl shadow-lg hover:shadow-arch-lg transition-all duration-300 hover:-translate-y-1 border-slate-200">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <Badge className="bg-[#0369a1] text-white hover:bg-[#0284c7]">
              Proyecto {index + 1}
            </Badge>
            <span className="text-sm font-medium text-slate-600">{project.duration}</span>
          </div>
          <CardTitle className="text-2xl font-bold text-slate-900" style={{letterSpacing: '-0.02em'}}>
            {project.name}
          </CardTitle>
          <CardDescription className="text-base text-slate-600 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-900 tracking-wide uppercase">
              Entregables clave
            </h4>
            <ul className="space-y-2">
              {project.deliverables.map((deliverable, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-[#0369a1] mt-1">•</span>
                  <span className="leading-relaxed">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
