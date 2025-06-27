import Header from "./Components/Header";
import MapSection from "./Components/MapSection";
import "leaflet/dist/leaflet.css";
import MapView from "./MapView";

function App() {
	const location = {
		latitude: 7.3775,
		longitude: 3.947,
		city: "Ibadan",
		region: "Oyo State",
		country: "Nigeria",
	};
	return (
		<>
			<Header />
			<MapSection />
		</>
	);
}

export default App;
