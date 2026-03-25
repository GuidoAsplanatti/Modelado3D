
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard = ({ plan, isRecommended, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={isRecommended ? 'scale-105' : ''}
    >
      <Card 
        className={`h-full rounded-2xl transition-all duration-300 ${
          isRecommended 
            ? 'shadow-arch-lg ring-2 ring-[#0369a1] border-[#0369a1]' 
            : 'shadow-lg hover:shadow-arch border-slate-200'
        }`}
      >
        <CardHeader>
          {isRecommended && (
            <Badge className="w-fit mb-3 bg-[#0369a1] text-white hover:bg-[#0284c7]">
              Recomendado
            </Badge>
          )}
          <CardTitle className="text-2xl font-bold text-slate-900" style={{letterSpacing: '-0.02em'}}>
            {plan.name}
          </CardTitle>
          <CardDescription className="text-base text-slate-600">
            {plan.description}
          </CardDescription>
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-900" style={{fontVariantNumeric: 'tabular-nums'}}>
                ${plan.price.toLocaleString('es-AR')}
              </span>
              <span className="text-lg text-slate-600">ARS</span>
            </div>
            {plan.originalPrice && (
              <div className="mt-1">
                <span className="text-sm text-slate-500 line-through">
                  ${plan.originalPrice.toLocaleString('es-AR')} ARS
                </span>
                <Badge variant="outline" className="ml-2 text-green-700 border-green-700">
                  Ahorro: {Math.round((1 - plan.price / plan.originalPrice) * 100)}%
                </Badge>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0369a1] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button 
            className={`w-full transition-all duration-200 active:scale-[0.98] ${
              isRecommended 
                ? 'bg-[#0369a1] text-white hover:bg-[#0284c7]' 
                : 'bg-slate-700 text-white hover:bg-slate-800'
            }`}
            size="lg"
            disabled={plan.disabled}
            onClick={() => {
              if (plan.href) {
                const element = document.querySelector(plan.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            {plan.cta}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
