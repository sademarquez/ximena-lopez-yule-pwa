import React, { useState, useEffect } from 'react';
import { BellRing, BellOff } from 'lucide-react';

// --- ¡ACCIÓN IMPORTANTE! ---
// Pega aquí la CLAVE PÚBLICA (Public Key) que generaste y guardaste en el Paso 3
const VAPID_PUBLIC_KEY = "PEGA_AQUÍ_TU_CLAVE_PÚBLICA_VAPID";

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

const NotificationSubscribe = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.getSubscription().then(sub => {
          if (sub) {
            setIsSubscribed(true);
            setSubscription(sub);
          }
          setLoading(false);
        }).catch(() => setLoading(false));
      });
    } else {
      setLoading(false);
    }
  }, []);

  const handleSubscribe = () => {
    if (isSubscribed) {
      // Unsubscribe
      subscription.unsubscribe().then(() => {
        setIsSubscribed(false);
        setSubscription(null);
        // TODO: Notificar al backend para eliminar la suscripción
      }).catch(error => console.error('Error unsubscribing', error));
    } else {
      // Subscribe
      navigator.serviceWorker.ready.then(registration => {
        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
        };
        registration.pushManager.subscribe(subscribeOptions).then(pushSubscription => {
          console.log('Suscripción exitosa. Guarda este objeto para enviar notificaciones:');
          console.log(JSON.stringify(pushSubscription));
          setIsSubscribed(true);
          setSubscription(pushSubscription);
          // TODO: Enviar 'pushSubscription' a tu backend para guardarlo
        }).catch(error => console.error('Failed to subscribe the user: ', error));
      });
    }
  };

  if (loading || !('serviceWorker' in navigator && 'PushManager' in window)) {
    return null; // No mostrar nada si no es compatible o está cargando
  }

  return (
    <div className="glass-card p-4 rounded-lg text-center mt-8">
      <p className="font-semibold text-gold mb-2">Notificaciones de la Campaña</p>
      <button 
        onClick={handleSubscribe} 
        className={`font-bold py-2 px-4 rounded-lg flex items-center gap-2 mx-auto transition-colors ${
          isSubscribed 
            ? 'bg-red-600/80 hover:bg-red-600 text-white' 
            : 'bg-brand-gold hover:bg-brand-gold-light text-brand-purple-night'
        }`}
      >
        {isSubscribed ? <BellOff size={20} /> : <BellRing size={20} />}
        {isSubscribed ? 'Desactivar Notificaciones' : 'Activar Notificaciones'}
      </button>
    </div>
  );
};

export default NotificationSubscribe;