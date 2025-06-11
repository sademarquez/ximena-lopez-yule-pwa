import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

function FloatingActionButton() {
  const whatsappNumber = "573001234567"; // IMPORTANTE: Reemplazar con el número real
  const message = "Hola Ximena, quiero saber más sobre tu campaña.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-brand-green text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50"
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare size={32} />
    </motion.a>
  );
}

export default FloatingActionButton;