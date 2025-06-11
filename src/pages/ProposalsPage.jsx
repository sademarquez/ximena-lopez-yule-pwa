import { motion } from 'framer-motion';
import { Gavel, Tractor, BookHeart, Wrench, Handshake } from 'lucide-react';

const proposals = [
  { icon: Gavel, title: 'Derechos de las Víctimas', description: 'Impulsar una ley de reparación integral que sea efectiva y digna, garantizando que los recursos lleguen directamente a las víctimas y sus familias. Fortaleceremos la Jurisdicción Especial para la Paz (JEP) en el territorio.' },
  { icon: Tractor, title: 'Desarrollo Rural Integral', description: 'Crear programas de apoyo técnico y financiero para pequeños agricultores, promoviendo cultivos sostenibles y abriendo nuevos mercados para nuestros productos. La tierra debe ser sinónimo de prosperidad, no de conflicto.' },
  { icon: BookHeart, title: 'Educación con Pertinencia', description: 'Luchar por más y mejores recursos para las escuelas rurales. Programas de becas universitarias para jóvenes del Alto Patía y creación de centros de formación técnica que respondan a las necesidades de nuestra región.' },
  { icon: Wrench, title: 'Infraestructura para la Vida', description: 'Gestionar la pavimentación de vías terciarias clave para conectar nuestras veredas, mejorar el acceso a la salud y facilitar el comercio. La conectividad digital también será una prioridad para cerrar la brecha con el resto del país.' },
  { icon: Handshake, title: 'Paz Territorial con Participación', description: 'Asegurar que la implementación de los Acuerdos de Paz se haga de la mano con las comunidades. Crearemos mesas de diálogo permanentes para que la ciudadanía sea la protagonista en la construcción de la paz.' }
];

function ProposalsPage() {
  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif">Propuestas para el Alto Patía</h1>
          <p className="text-lg text-gray-600 mt-2">Un plan de acción claro para transformar nuestra región.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((proposal, index) => (
            <motion.div
              key={proposal.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-b-4 border-brand-orange hover:border-brand-green transition-colors"
            >
              <div className="bg-brand-green text-white rounded-full p-4 mb-4">
                <proposal.icon className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold mb-2">{proposal.title}</h2>
              <p className="text-gray-600 flex-grow">{proposal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProposalsPage;