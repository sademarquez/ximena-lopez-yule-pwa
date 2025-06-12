import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookMarked, Phone, FileDown, ChevronDown, ChevronUp } from 'lucide-react';

// --- CONTENIDO DE EJEMPLO - REEMPLAZAR CON EL REAL ---
const legalGuides = [
  {
    title: "¿Cómo declaro un hecho victimizante?",
    content: "La declaración es el primer paso. Debes acercarte a la Defensoría del Pueblo, la Procuraduría o las oficinas de la Unidad para las Víctimas. Tienes un plazo de hasta 2 años después de ocurrido el hecho. No necesitas un abogado para este paso. Lleva tu documento de identidad y narra los hechos de forma clara."
  },
  {
    title: "¿Qué es el Registro Único de Víctimas (RUV)?",
    content: "Una vez haces la declaración, la Unidad para las Víctimas valora tu caso. Si es aceptado, serás incluido en el RUV. Estar en el RUV es lo que te permite acceder a las medidas de ayuda y reparación del Estado."
  },
  {
    title: "Derechos a la Salud y Educación",
    content: "Como víctima, tienes derecho a recibir atención prioritaria en salud física y mental a través del Papsivi (Programa de Atención Psicosocial y Salud Integral a Víctimas). En educación, existen beneficios como exenciones de costos y acceso a créditos especiales."
  }
];

const helpDirectory = [
  { name: "Unidad para las Víctimas (Nacional)", phone: "01 8000 911 119" },
  { name: "Defensoría del Pueblo (Cauca)", phone: "(+57) 2 824 2200" },
  { name: "Procuraduría Regional (Cauca)", phone: "(+57) 2 824 1121" },
  { name: "ONG de DDHH Local (Ejemplo)", phone: "300 123 4567" },
];

const AccordionItem = ({ guide }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 px-2"
      >
        <span className="text-lg font-semibold text-gold">{guide.title}</span>
        {isOpen ? <ChevronUp className="text-brand-gold" /> : <ChevronDown className="text-brand-gold" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="p-4 text-gray-300 bg-brand-purple-deep/30 rounded-b-md">
          {guide.content}
        </p>
      </motion.div>
    </div>
  );
};


function ResourcesPage() {
  return (
    <div className="py-12 md:py-20 bg-transparent text-white">
      <div className="container mx-auto px-4 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gold">Centro de Recursos</h1>
          <p className="text-lg text-gray-300 mt-2">Información para empoderarte. Aquí encontrarás guías y contactos útiles.</p>
        </motion.div>

        {/* Sección de Guías Legales */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3"><BookMarked /> Guías Legales Simplificadas</h2>
          <div className="glass-card rounded-lg shadow-xl p-4 md:p-6">
            {legalGuides.map((guide, index) => (
              <AccordionItem key={index} guide={guide} />
            ))}
          </div>
        </motion.section>

        {/* Sección de Directorio de Ayuda */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4 } }}>
          <h2 className="text-3xl font-bold text-gold mb-6 flex items-center gap-3"><Phone /> Directorio de Ayuda</h2>
          <div className="glass-card rounded-lg shadow-xl p-4 md:p-6 grid sm:grid-cols-2 gap-4">
            {helpDirectory.map((contact, index) => (
              <div key={index} className="bg-brand-purple-deep/30 p-4 rounded-md">
                <p className="font-bold text-gray-200">{contact.name}</p>
                <a href={`tel:${contact.phone}`} className="text-brand-gold hover:underline">{contact.phone}</a>
              </div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default ResourcesPage;