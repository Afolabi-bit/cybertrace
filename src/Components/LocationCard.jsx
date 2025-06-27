import { useEffect, useState } from "react";
import InfoCardSkeleton from "./CardSkeleton";

const LocationCard = () => {
	const [location, setLocation] = useState({});
	const [ipAddress, setIpAddress] = useState("102.89.75.202");

	const apiKey = import.meta.env.VITE_API_KEY;

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
				console.log(data);
			}
		}

		fetchLocation();
	}, []);

	const dataIsFetched = !!Object.keys(location).length;

	return (
		<div className="w-full h-[294px] bg-white rounded-[15px] shadow-soft absolute left-0 top-[167px] pt-[26px] z-10">
			{!dataIsFetched && <InfoCardSkeleton />}
			{dataIsFetched && (
				<div>
					<div className="mb-[24px]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px]">
							ip address
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] ">
							{location?.ip}
						</p>
					</div>

					<div className="mb-[24px]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px]">
							location
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] ">
							{`${location?.location.region}, ${location?.location.country} ${location?.location.geonameId}`}
						</p>
					</div>
					<div className="mb-[24px]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px]">
							timezone
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] ">
							{`UTC${location?.location.timezone}`}
						</p>
					</div>
					<div className="mb-[24px]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px]">
							isp
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] truncate w-[280px] mx-auto  ">
							{location?.isp || "Unresolved"}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default LocationCard;
