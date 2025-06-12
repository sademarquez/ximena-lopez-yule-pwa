import { motion } from 'framer-motion';
import MapComponent from '../components/map/MapComponent';
import { ShieldAlert, Megaphone, UserCheck, CheckCircle, ArrowRight, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotificationSubscribe from '../components/ui/NotificationSubscribe'; // <-- IMPORTADO

const cardVariants = { /* ... (código sin cambios) ... */ };

function HomePage() {
  const googleFormUrl = "PEGA_AQUÍ_EL_ENLACE_CORTO_DE_TU_GOOGLE_FORM";

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* ... (Secciones Hero, Intro Ximena, Mapa de Alertas - sin cambios) ... */}
      <motion.section 
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3 text-gold"><ShieldAlert size={32}/> Mapa de Alertas Ciudadanas</h2>
            <p className="text-gray-400 mt-2">Información en tiempo real para proteger a nuestra gente. Reporta y mantente informado.</p>
            <a 
              href={googleFormUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-gold text-brand-purple-night font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-transform"
              >
                <Edit size={20} />
                Reportar una Alerta
              </motion.button>
            </a>
        </div>
        <MapComponent />
      </motion.section>

      {/* ... (Sección Propuestas Clave - sin cambios) ... */}
      <section className="bg-transparent py-16">
        { /* ... */ }
      </section>

      {/* --- INICIO DE LA NUEVA SECCIÓN --- */}
      <section className="container mx-auto px-4">
        <NotificationSubscribe />
      </section>
      {/* --- FIN DE LA NUEVA SECCIÓN --- */}
    </div>
  );
}

export default HomePage;