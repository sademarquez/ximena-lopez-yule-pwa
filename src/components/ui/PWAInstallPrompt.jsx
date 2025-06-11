import { Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import usePWAInstall from '../../hooks/usePWAInstall';

function PWAInstallPrompt() {
  const [isInstallable, handleInstall] = usePWAInstall();

  return (
    <AnimatePresence>
      {isInstallable && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
        >
          <button
            onClick={handleInstall}
            className="bg-brand-blue text-white font-semibold py-2 px-4 rounded-full shadow-lg flex items-center gap-2"
          >
            <Download size={20} />
            Instalar App
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PWAInstallPrompt;