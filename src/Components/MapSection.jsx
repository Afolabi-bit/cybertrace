import MapView from "../MapView";

const MapSection = () => {
	const location = {
		latitude: 7.3775,
		longitude: 3.947,
		city: "Ibadan",
		region: "Oyo State",
		country: "Nigeria",
	};
	return (
		<section className="w-full h-[600px] ">
			<MapView location={location} />
		</section>
	);
};

export default MapSection;
