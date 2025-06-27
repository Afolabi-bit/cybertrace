import Header from "./Components/Header";
import MapSection from "./Components/MapSection";
import "leaflet/dist/leaflet.css";
import { AppContextProvider } from "./store/AppContext";

function App() {
	return (
		<AppContextProvider>
			<Header />
			<MapSection />
		</AppContextProvider>
	);
}

export default App;
