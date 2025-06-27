import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

const MapView = ({ latitude, longitude }) => {
	const position = [latitude || 7.3775, longitude || 3.947]; // fallback to Ibadan

	return (
		<div className="h-[600px] w-full">
			<MapContainer
				center={position}
				zoom={13}
				className="h-full w-full z-0"
			>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution="&copy; OpenStreetMap contributors"
				/>
				<Marker position={position}>
					<Popup>Ibadan</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapView;
