import MapView from "../MapView";

const MapSection = ({ coords }) => {
	return (
		<section className="w-full h-[600px] ">
			<MapView coords={coords} />
		</section>
	);
};

export default MapSection;
