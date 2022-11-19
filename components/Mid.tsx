import { useEffect, useState } from "react";
import bg from "../public/swoosh.png";
import Features from "./Features";
import ParaAndCorrection from "./ParaAndCorrection";

function Mid() {
	const [cardIdx, setCardIdx] = useState(1);
	const [counter, setCounter] = useState<NodeJS.Timer>();

	useEffect(() => {
		if (counter) return;
		const interval = setInterval(() => {
			setCardIdx((prev) => {
				if (prev === 4) return 1;
				return prev + 1;
			});
		}, 5200);

		setCounter(interval);
	}, []);

	return (
		<div
			className="w-full h-screen bg-no-repeat mid flex flex-col py-8 items-center"
			style={{
				backgroundImage: `url(${bg.src})`,
			}}
		>
			<h1 className="capitalize heading">
				Aim high with brilliant writing
			</h1>
			<div className="rounded-md w-fit bg-button hover:bg-buttover text-white py-4 px-8 font-bold mt-6 text-sm">
				Upgrade to Grammarly Premium
			</div>
			<div
				className="
             relative w-full"
			>
				<div className="relative left-80">
					<ParaAndCorrection idx={cardIdx} />
				</div>
				<div className="right-72 top-20 absolute">
					<Features idx={cardIdx} />
				</div>
			</div>
		</div>
	);
}

export default Mid;
