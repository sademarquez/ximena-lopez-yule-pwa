import { motion } from 'framer-motion';
import { Calendar, Radio, Youtube } from 'lucide-react';

// --- ¡ACCIÓN IMPORTANTE! ---
// Pega aquí el código <iframe> que copiaste de Google Calendar
const googleCalendarEmbed = `<iframe src="https://calendar.google.com/calendar/embed?src=16362caeac171db867df215830906ecac8dfc413d884f3778451728d2724f564%40group.calendar.google.com&ctz=America%2FBogota" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>`;

// --- EJEMPLOS DE CONTENIDO - REEMPLAZAR CON LOS REALES ---
const youtubeLiveUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Reemplazar con el ID del video en vivo o último video
const anchorFmPodcastUrl = "https://anchor.fm/s/12345/podcast/play/67890/embed"; // Reemplazar con el enlace de embed de tu podcast

function EventsPage() {
  return (
    <div className="py-12 md:py-20 bg-transparent text-white">
      <div className="container mx-auto px-4 space-y-16">

        {/* Sección del Calendario de Eventos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gold flex items-center justify-center gap-4">
              <Calendar /> Agenda de la Campaña
            </h1>
            <p className="text-lg text-gray-300 mt-2">Acompáñanos en el territorio. Estos son nuestros próximos eventos.</p>
          </div>
          <div className="glass-card rounded-lg shadow-xl p-4 md:p-6 overflow-hidden">
            {/* El calendario se inserta aquí */}
            <div dangerouslySetInnerHTML={{ __html: googleCalendarEmbed }} />
          </div>
        </motion.section>

        {/* Sección de Transmisiones */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gold flex items-center justify-center gap-4">
              <Radio /> Emisora y Transmisiones
            </h2>
            <p className="text-lg text-gray-300 mt-2">Escucha nuestras propuestas y revive los encuentros con la comunidad.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Transmisión en Vivo de YouTube */}
            <div className="glass-card rounded-lg shadow-xl p-4 md:p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-gold mb-4 flex items-center gap-2"><Youtube /> Última Transmisión</h3>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe 
                  src={youtubeLiveUrl}
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
            </div>

            {/* Podcast de Anchor.fm */}
            <div className="glass-card rounded-lg shadow-xl p-4 md:p-6 flex flex-col">
              <h3 className="text-2xl font-semibold text-gold mb-4">Podcast de la Campaña</h3>
               <iframe 
                  src={anchorFmPodcastUrl}
                  height="102px" 
                  width="100%" 
                  frameBorder="0" 
                  scrolling="no"
                  className="rounded-md"
                ></iframe>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default EventsPage;