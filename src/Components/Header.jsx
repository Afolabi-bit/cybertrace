import { useContext, useRef } from "react";
import LocationCard from "./LocationCard";
import AppContext from "../store/AppContext";

const Header = () => {
	const { handleSetIP } = useContext(AppContext);
	const inputRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		let ip = inputRef.current.value.trim();

		if (ip) {
			handleSetIP(ip);
		}
	}
	return (
		<header className="w-full h-[300px] bg-mobile-pattern ">
			<div className="container pt-[26px] relative ">
				<h1 className="text-[26px] leading-[30px] text-center tracking-[-0.232143px] text-white font-[500] ">
					CyberTrace Tracker
				</h1>
				<form
					onSubmit={handleSubmit}
					className="mt-[29px] w-full h-[58px] shadow-soft rounded-[15px] bg-white flex"
				>
					<input
						ref={inputRef}
						type="text"
						className="rounded-tl-[15px] rounded-bl-[15px] w-[calc(100%-58px)] pl-[24px] font-[400] placeholder:font-[400] text-[18px] placeholder:text-[18px] leading-[21px] placeholder:leading-[21px] text-[#2C2C2C] placeholder:text-[#2C2C2C] outline-none "
						placeholder="Enter IP address"
						autoComplete="off"
					/>
					<button className="h-full w-[58px] flex justify-center items-center bg-black rounded-tr-[15px] rounded-br-[15px] ">
						<img
							src="/images/icon-arrow.svg"
							alt=""
						/>
					</button>
				</form>
				<LocationCard />
			</div>
		</header>
	);
};

export default Header;
