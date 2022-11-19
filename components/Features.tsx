import React, { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

function Features({ idx }: { idx: number }) {
	return (
		<div className="flex flex-col gap-5 w-80">
			<TitleAndDescription
				title="Clear, confident communication"
				description="Take the guesswork out of great writing."
				start={idx === 1}
			/>
			<TitleAndDescription
				title="Comprehensive real-time feedback"
				description="Effective writing takes more than good grammar."
				start={idx === 2}
			/>
			<TitleAndDescription
				title="Support you can rely on"
				description="Write with a second pair of eyes that never gets tired."
				start={idx === 3}
			/>
			<TitleAndDescription
				title="Strike the right tone"
				description="Make the best impression, every time."
				start={idx === 4}
			/>
		</div>
	);
}

const TitleAndDescription = ({
	title,
	description,
	start,
}: {
	title: string;
	description: string;
	start: boolean;
}) => {
	const [progress, setProgress] = useState(0);
	const [counter, setCounter] = useState<NodeJS.Timer>();

	useEffect(() => {
		if (!start) {
			if (counter) {
				setCounter(undefined);
				setProgress(0);
				clearInterval(counter);
			}
			return;
		}

		const interval = setInterval(() => {
			setProgress((prev) => prev + 4);
		}, 200);

		setCounter(interval);
	}, [start]);

	return (
		<div className="flex flex-col text-black">
			<p
				className={` font-bold ${
					start ? "text-black" : "text-title"
				} text-base font `}
			>
				{title}
			</p>
			<p className="text-gray-700 font">{description}</p>
			<LinearProgress
				variant="determinate"
				value={progress}
				color="inherit"
				className="mt-4"
			/>
		</div>
	);
};

export default Features;
