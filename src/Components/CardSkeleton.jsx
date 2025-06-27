const InfoCardSkeleton = () => (
	<div className="flex flex-col items-center rounded-2xl w-full max-w-md animate-pulse space-y-6">
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
);
export default InfoCardSkeleton;
