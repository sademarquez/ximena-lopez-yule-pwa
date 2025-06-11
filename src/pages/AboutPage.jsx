import { motion } from 'framer-motion';
import { BookOpen, Scale, HeartHandshake } from 'lucide-react';

function AboutPage() {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif">Sobre Ximena López Yule</h1>
          <p className="text-lg text-gray-600 mt-2">Una vida dedicada al servicio y la defensa del territorio.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg flex items-start gap-6"
          >
            <BookOpen className="w-12 h-12 text-brand-blue flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Formación y Filosofía</h2>
              <p className="text-gray-700 leading-relaxed">
                Con estudios en <strong>Derecho y Filosofía</strong> de la prestigiosa Universidad del Cauca, mi formación no es solo académica, es una herramienta para entender y transformar la realidad. La filosofía me dio la capacidad de cuestionar las injusticias y el derecho, las herramientas para combatirlas.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg flex items-start gap-6"
          >
            <Scale className="w-12 h-12 text-brand-green flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Defensora de Derechos Humanos</h2>
              <p className="text-gray-700 leading-relaxed">
                Mi trabajo en el territorio, hombro a hombro con las comunidades, me ha permitido conocer de primera mano el dolor pero también la resiliencia de nuestra gente. He acompañado a víctimas del conflicto armado, documentando casos, buscando verdad, justicia y reparación. No hablo de oídas, hablo desde la experiencia vivida.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg shadow-lg flex items-start gap-6"
          >
            <HeartHandshake className="w-12 h-12 text-brand-orange flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Visión: La Voz en el Congreso</h2>
              <p className="text-gray-700 leading-relaxed">
                Mi candidatura no es un proyecto personal, es la continuación de una lucha colectiva. Aspiro a ser un puente entre las necesidades de las veredas del Alto Patía Norte del Cauca y las decisiones que se toman en Bogotá. <strong>"Seré la voz de las víctimas en el Congreso"</strong> no es solo un lema, es un juramento.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;