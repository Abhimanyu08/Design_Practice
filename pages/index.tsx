import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Mid from "../components/Mid";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
	return (
		<div className="w-full h-max">
			<Navbar />
			<Mid />
		</div>
	);
};

export default Home;
