import { useContext, useEffect, useState } from "react";
import InfoCardSkeleton from "./CardSkeleton";
import AppContext from "../store/AppContext";

const LocationCard = () => {
	const { location, dataIsFetched } = useContext(AppContext);

	return (
		<div className="w-full h-[294px] bg-white rounded-[15px] shadow-soft absolute left-0 top-[167px] pt-[26px] md:top-[217px] md:h-[310px] z-10 lg:w-[1110px] lg:h-[161px]">
			{!dataIsFetched && <InfoCardSkeleton />}
			{dataIsFetched && (
				<div className="lg:flex  justify-between lg:px-[32px] lg:py-[10px] ">
					<div className="mb-[24px] lg:w-[245px]  pr-[32px] border-r border-[000000] border-opacity-[0.15] ">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px] lg:text-left">
							ip address
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] lg:text-left lg:text-[26px] lg:leading-[30px] lg:tracking-[-0.232145px] ">
							{location?.ip}
						</p>
					</div>

					<div className="mb-[24px] lg:w-[245px]  pr-[32px] border-r border-[000000] border-opacity-[0.15]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px] lg:text-left">
							location
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C]  lg:text-[26px] lg:text-left lg:leading-[30px] lg:tracking-[-0.232145px]  ">
							{`${location?.region}, ${location?.country} ${location?.geonameId}`}
						</p>
					</div>

					<div className="mb-[24px] lg:w-[245px]  pr-[32px] border-r border-[000000] border-opacity-[0.15]">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px] lg:text-left">
							timezone
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C]  lg:text-[26px] lg:leading-[30px] lg:tracking-[-0.232145px] lg:text-left ">
							{`UTC${location?.timezone}`}
						</p>
					</div>

					<div className="mb-[24px] lg:w-[213px] ">
						<p className="font-bold text-[10px] leading-[12px] text-center tracking-[1.45833px] uppercase text-[#2C2C2C] mix-blend-normal text-opacity-50 mb-[7px] lg:text-left">
							isp
						</p>
						<p className="font-[500] text-[20px] leading-[24px] text-center tracking-[-0.178571px] text-[#2C2C2C] truncate w-[280px] mx-auto md:w-[320px] lg:text-left lg:text-[26px] lg:leading-[30px] lg:tracking-[-0.232145px] lg:w-full ">
							{location?.isp || "Unresolved"}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default LocationCard;
