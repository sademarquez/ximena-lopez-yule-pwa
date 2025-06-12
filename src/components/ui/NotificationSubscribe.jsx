import React, { useState, useEffect } from 'react';
import { BellRing, BellOff } from 'lucide-react';

// --- ¡ACCIÓN IMPORTANTE! ---
// Asegúrate de que tu CLAVE PÚBLICA (Public Key) VAPID esté aquí.
const VAPID_PUBLIC_KEY = "BLByH3QOwovQdqj19jYpjwmFWBLE6P3v-JgK8Wfiry3vWMpoTWCCLQxwVJ5HXG6MbfRB-pE11UlihyqkXgYdNGk
";

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
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        setPermission(Notification.permission);
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
        }).catch(error => console.error('Failed to subscribe the user: ', error));
      });
    }
  };
  
  if (loading || !('serviceWorker' in navigator && 'PushManager' in window)) {
    return null;
  }
  
  if (permission === 'denied') {
      return (
        <div className="glass-card p-4 rounded-lg text-center mt-8">
            <p className="font-semibold text-red-500 mb-2">Has bloqueado las notificaciones.</p>
            <p className="text-sm text-gray-400">Para activarlas, debes cambiar los permisos en la configuración de tu navegador para este sitio.</p>
        </div>
      )
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