import { createContext, useEffect, useState } from "react";

const AppContext = createContext({
	location: {},
	ipAddress: "",
	dataIsFetched: false,
	handleSetIP: () => {},
});

export const AppContextProvider = ({ children }) => {
	const apiKey = import.meta.env.VITE_API_KEY;

	const [location, setLocation] = useState({});
	const [ipAddress, setIpAddress] = useState("");
	const [dataIsFetched, setDataIsFetched] = useState(false);

	useEffect(() => {
		async function fetchDefault() {
			const res = await fetch("https://ipapi.co/json");
			const data = await res.json();

			setLocation({
				latitude: data.latitude,
				longitude: data.longitude,
				region: data.region,
				country: data.country_code,
				geonameId: data.country_area,
				timezone: data.utc_offset,
				ip: data.ip,
				isp: data.org,
			});
			setDataIsFetched(!!Object.keys(location));
		}
		fetchDefault();
	}, []);

	useEffect(() => {
		async function fetchLocation() {
			setDataIsFetched(false);
			const response = await fetch(
				`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`,
			);

			if (!response.ok) {
				setDataIsFetched(true);
				return;
			} else {
				const data = await response.json();
				console.log(data);
				setLocation({
					latitude: data.location.lat,
					longitude: data.location.lng,
					region: data.location.region,
					country: data.location.country,
					geonameId: data.location.geonameId,
					timezone: data.location.timezone,
					ip: data.ip,
					isp: data.isp,
				});
				setDataIsFetched(!!Object.keys(location));
			}
		}

		if (ipAddress) {
			fetchLocation();
		}
	}, [ipAddress]);

	function handleSetIP(input) {
		setIpAddress(input);
	}
	return (
		<AppContext.Provider value={{ handleSetIP, location, dataIsFetched }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContext;
