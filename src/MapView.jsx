import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: markerIcon2x,
	iconUrl: markerIcon,
	shadowUrl: markerShadow,
});

const RecenterMap = ({ lat, lng }) => {
	const map = useMap();

	useEffect(() => {
		if (lat && lng) {
			map.setView([lat, lng], map.getZoom());
		}
	}, [lat, lng, map]);

	return null;
};

const MapView = ({ coords }) => {
	const { latitude, longitude, region } = coords;
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
					<Popup>{region}</Popup>
				</Marker>

				<RecenterMap
					lat={latitude}
					lng={longitude}
				/>
			</MapContainer>
		</div>
	);
};

export default MapView;
