import Header from "./Components/Header";
import MapSection from "./Components/MapSection";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import getDefaultLocation from "./getDefaultLocation";

function App() {
	const [location, setLocation] = useState({});
	const [ipAddress, setIpAddress] = useState("");

	const apiKey = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		const defaultLocation = getDefaultLocation();
		// setLocation(defaultLocation);
	}, []);

	useEffect(() => {
		async function fetchLocation() {
			const response = await fetch(
				`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`,
			);

			if (!response.ok) {
				return;
			} else {
				const data = await response.json();
				setLocation(data);
			}
		}

		fetchLocation();
	}, [ipAddress]);

	return (
		<>
			<Header
				onSearch={setIpAddress}
				location={location}
			/>
			<MapSection
				coords={{
					latitude: location.location?.lat,
					longitude: location.location?.lng,
					region: location.location?.region,
				}}
			/>
		</>
	);
}

export default App;
