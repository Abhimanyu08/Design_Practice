import type { NextPage } from "next";
import Lower from "../components/Lower";
import Mid from "../components/Mid";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<div className="w-full h-max overflow-x-hidden">
			<Navbar />
			<Mid />
			<Lower />
		</div>
	);
};

export default Home;
