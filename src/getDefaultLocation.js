export default async function getDefaultLocation() {
	const res = await fetch("https://ipapi.co/json");
	const data = await res.json();

	console.log(data);

	return {
		latitude: data.latitude,
		longitude: data.longitude,
		region: data.region,
		country: data.country_code,
		code: data.country_area,
		ip: data.ip,
		isp: data.org,
	};
}
