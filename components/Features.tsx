import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

function Features({
	idx,
	setIdx,
	mainCounter,
	setMainCounter,
}: {
	idx: number;
	setIdx: Dispatch<SetStateAction<number>>;
	mainCounter: NodeJS.Timer | undefined;
	setMainCounter: Dispatch<SetStateAction<NodeJS.Timer | undefined>>;
}) {
	return (
		<div className="flex flex-col gap-5 w-96">
			<TitleAndDescription
				idx={1}
				title="Clear, confident communication"
				description="Take the guesswork out of great writing."
				start={idx === 1}
				{...{ setIdx, mainCounter, setMainCounter }}
			/>
			<TitleAndDescription
				idx={2}
				title="Comprehensive real-time feedback"
				description="Effective writing takes more than good grammar."
				start={idx === 2}
				{...{ setIdx, mainCounter, setMainCounter }}
			/>
			<TitleAndDescription
				idx={3}
				title="Support you can rely on"
				description="Write with a second pair of eyes that never gets tired."
				start={idx === 3}
				{...{ setIdx, mainCounter, setMainCounter }}
			/>
			<TitleAndDescription
				idx={4}
				title="Strike the right tone"
				description="Make the best impression, every time."
				start={idx === 4}
				{...{ setIdx, mainCounter, setMainCounter }}
			/>
		</div>
	);
}

const TitleAndDescription = ({
	idx,
	title,
	description,
	start,
	setIdx,
	mainCounter,
	setMainCounter,
}: {
	idx: number;
	title: string;
	description: string;
	start: boolean;
	setIdx: Dispatch<SetStateAction<number>>;
	mainCounter: NodeJS.Timer | undefined;
	setMainCounter: Dispatch<SetStateAction<NodeJS.Timer | undefined>>;
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
		<div
			className="flex flex-col text-black hover:scale-110 transition-all duration-300"
			onClick={() => {
				clearInterval(mainCounter);
				setMainCounter(undefined);
				setIdx(idx);
			}}
		>
			<p
				className={` font-bold ${
					start ? "text-black" : "text-title"
				} text-base font `}
			>
				{title}
			</p>
			<p className="text-gray-700 font text-sm">{description}</p>
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
