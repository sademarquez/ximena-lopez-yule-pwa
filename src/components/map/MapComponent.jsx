import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Arreglo para el ícono por defecto de Leaflet que se rompe con Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Coordenadas aproximadas del centro del Alto Patía Norte del Cauca
const mapCenter = [2.65, -76.85];

// TODO: Fase 2 - Estos datos vendrán de la API de Google Sheets
const mockAlerts = [
    { id: 1, type: 'Enfrentamiento Armado', position: [2.70, -76.80], description: 'Reporte de enfrentamiento en la vereda El Cruce. Se recomienda precaución.', date: '2024-05-20' },
    { id: 2, type: 'Derrumbe en Vía', position: [2.60, -76.90], description: 'Derrumbe bloquea la vía principal hacia Santander de Quilichao.', date: '2024-05-19' },
    { id: 3, type: 'Alerta DDHH', position: [2.68, -76.95], description: 'Amenazas a líder social en la comunidad de El Tambo.', date: '2024-05-21' },
];

function MapComponent() {
  return (
    <div className="h-[50vh] min-h-[400px] w-full rounded-lg shadow-xl overflow-hidden border-4 border-white">
      <MapContainer center={mapCenter} zoom={10} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mockAlerts.map(alert => (
          <Marker key={alert.id} position={alert.position}>
            <Popup>
              <div className="p-1">
                <h4 className="font-bold text-brand-blue text-md mb-1">{alert.type}</h4>
                <p className="text-sm text-gray-700">{alert.description}</p>
                <p className="text-xs text-gray-500 mt-2">Fecha: {alert.date}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;