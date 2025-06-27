import { useContext } from "react";
import MapView from "../MapView";
import AppContext from "../store/AppContext";

const MapSection = () => {
	const { location } = useContext(AppContext);
	return (
		<section className="w-full h-[600px] ">
			<MapView
				coords={{
					latitude: location?.latitude,
					longitude: location?.longitude,
				}}
			/>
		</section>
	);
};

export default MapSection;
