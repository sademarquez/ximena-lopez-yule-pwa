import { motion } from 'framer-motion';
import MapComponent from '../components/map/MapComponent';
import { ShieldAlert, Megaphone, UserCheck, CheckCircle, ArrowRight, Edit } from 'lucide-react'; // Se añade el icono Edit
import { Link } from 'react-router-dom';

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

function HomePage() {
  // ¡¡ACCIÓN IMPORTANTE!! Pega aquí el enlace corto de tu formulario de Google
  const googleFormUrl = "https://forms.gle/DhUZCEMCMQ4HZatCA";

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] bg-hero-pattern bg-cover bg-center flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center p-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif !text-brand-gold drop-shadow-gold-glow-lg">Seré la voz de las víctimas en el Congreso</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mt-4 text-gray-300 drop-shadow-md">
            Construyendo un futuro de paz, justicia y oportunidades para el Alto Patía Norte del Cauca.
          </p>
          <Link to="/propuestas">
            <motion.button
              whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-brand-gold hover:bg-brand-gold-light text-brand-purple-night font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
            >
              Conoce las Propuestas
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Intro Ximena */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
        className="container mx-auto px-4 -mt-20 relative z-20"
      >
        <div className="glass-card text-gray-300 rounded-lg shadow-xl p-8 md:flex items-center gap-8">
            <UserCheck className="w-16 h-16 text-brand-gold mx-auto md:mx-0 mb-4 md:mb-0"/>
            <div>
                <h2 className="text-2xl font-bold mb-2 text-gold">Ximena López Yule: Liderazgo y Compromiso</h2>
                <p>
                Líder social y defensora de Derechos Humanos, formada en Derecho y Filosofía. Mi vida ha sido dedicada a acompañar a las víctimas del conflicto. Ahora, busco llevar esa lucha y esa voz al corazón de la democracia colombiana.
                </p>
                <Link to="/sobre-ximena" className="text-gold font-semibold mt-4 inline-flex items-center gap-2">
                    Mi Historia <ArrowRight size={18}/>
                </Link>
            </div>
        </div>
      </motion.section>

      {/* Mapa de Alertas */}
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
            {/* --- INICIO DEL NUEVO CÓDIGO --- */}
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
            {/* --- FIN DEL NUEVO CÓDIGO --- */}
        </div>
        <MapComponent />
      </motion.section>

      {/* Propuestas Clave (sin cambios) */}
      <section className="bg-transparent py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-3 text-gold"><Megaphone size={32}/> Nuestras Propuestas</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                {[
                  { title: "Derechos de las Víctimas", description: "Garantizar la reparación integral y el acceso a la justicia para todas las víctimas del conflicto." },
                  { title: "Desarrollo Rural Sostenible", description: "Impulsar proyectos productivos que fortalezcan la economía de nuestras familias campesinas." },
                  { title: "Paz Territorial Verdadera", description: "Implementar los acuerdos, construyendo confianza y reconciliación desde las veredas." }
                ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{ once: true, amount: 0.5 }}
                      variants={cardVariants}
                      className="glass-card text-gray-300 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-t-4 border-brand-gold"
                    >
                        <CheckCircle className="w-10 h-10 text-brand-gold mx-auto mb-4"/>
                        <h3 className="font-bold text-xl text-gold mb-2">{item.title}</h3>
                        <p>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
      
    </div>
  );
}

export default HomePage;