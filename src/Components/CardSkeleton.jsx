const InfoCardSkeleton = () => (
	<>
		<div className="flex flex-col items-center rounded-2xl w-full max-w-md animate-pulse space-y-6 lg:hidden">
			{/* IP ADDRESS */}
			<div className="space-y-2 flex flex-col items-center">
				<div className="h-3 w-24 bg-gray-200 rounded" /> {/* label */}
				<div className="h-5 w-40 bg-gray-300 rounded" /> {/* value */}
			</div>

			{/* LOCATION */}
			<div className="space-y-2 flex flex-col items-center">
				<div className="h-3 w-20 bg-gray-200 rounded" />
				<div className="h-5 w-52 bg-gray-300 rounded" />
			</div>

			{/* TIMEZONE */}
			<div className="space-y-2 flex flex-col items-center">
				<div className="h-3 w-20 bg-gray-200 rounded" />
				<div className="h-5 w-32 bg-gray-300 rounded" />
			</div>

			{/* ISP */}
			<div className="space-y-2 flex flex-col items-center">
				<div className="h-3 w-10 bg-gray-200 rounded" />
				<div className="h-5 w-60 bg-gray-300 rounded" />
			</div>
		</div>

		<div className="pl-[40px] pt-[20px] grid-cols-1 md:grid-cols-4 gap-6 hidden lg:grid">
			{/* IP Address */}
			<div>
				<div className="h-3 w-24 bg-gray-300 rounded mb-2 animate-pulse" />
				<div className="h-6 w-36 bg-gray-300 rounded animate-pulse" />
			</div>

			{/* Location */}
			<div>
				<div className="h-3 w-24 bg-gray-300 rounded mb-2 animate-pulse" />
				<div className="h-6 w-40 bg-gray-300 rounded animate-pulse" />
			</div>

			{/* Timezone */}
			<div>
				<div className="h-3 w-24 bg-gray-300 rounded mb-2 animate-pulse" />
				<div className="h-6 w-24 bg-gray-300 rounded animate-pulse" />
			</div>

			{/* ISP */}
			<div>
				<div className="h-3 w-16 bg-gray-300 rounded mb-2 animate-pulse" />
				<div className="h-6 w-36 bg-gray-300 rounded animate-pulse" />
			</div>
		</div>
	</>
);
export default InfoCardSkeleton;
