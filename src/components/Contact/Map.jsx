import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrige el icono por defecto de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function Map() {
    return (
        <MapContainer
            center={[6.225632, -75.581014]} // Coordenadas de Medellín
            zoom={12}
            maxZoom={12}
            zoomControl={false}
            style={{ height: "17rem", width: "100%" }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[6.2442, -75.5812]}>
                <Popup>Vivo en Medellín, Colombia</Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
