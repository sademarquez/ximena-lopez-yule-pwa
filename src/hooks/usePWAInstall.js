import { useState, useEffect } from 'react';

function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevenir que el navegador muestre su propio prompt
      e.preventDefault();
      // Guardar el evento para usarlo después
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // Mostrar el prompt de instalación
      deferredPrompt.prompt();
      // Esperar a la elección del usuario
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // Limpiar el prompt
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return [isInstallable, handleInstall];
}

export default usePWAInstall;