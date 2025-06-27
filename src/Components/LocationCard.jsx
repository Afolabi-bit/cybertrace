import { useContext, useEffect, useState } from "react";
import InfoCardSkeleton from "./CardSkeleton";
import AppContext from "../store/AppContext";

const LocationCard = () => {
	const { location, dataIsFetched } = useContext(AppContext);

	return (
		<div className="w-full h-[294px] bg-white rounded-[15px] shadow-soft absolute left-0 top-[167px] pt-[26px] md:top-[217px] md:h-[310px] z-10">
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
							{`${location?.region}, ${location?.country} ${location?.geonameId}`}
						</p>
					</div>
					<div className="mb-[24px]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px]">
							timezone
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] ">
							{`UTC${location?.timezone}`}
						</p>
					</div>
					<div className="mb-[24px]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px]">
							isp
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] truncate w-[280px] mx-auto md:w-[320px] ">
							{location?.isp || "Unresolved"}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default LocationCard;
