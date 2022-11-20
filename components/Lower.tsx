import React from "react";
import { GoCheck } from "react-icons/go";
import { freePoints, premiumPoints } from "../utils/constants";

const freeStats = {
	preface: "for casual writing",
	type: "free",
	note: "Basic writing suggestions",
	points: freePoints,
	TypeButton: () => (
		<div className="rounded-md w-72 bg-disabled text-white py-4 px-8 font-bold mt-6 text-sm text-center">
			Included in Premium
		</div>
	),
} as const;

const premiumStats = {
	preface: "for work or school",
	type: "premium",
	note: "Style, tone,and clarity improvements for writing at work or school.",
	points: premiumPoints,
	TypeButton: () => (
		<div className="rounded-md w-72 bg-button hover:bg-buttover text-white py-4 px-8 font-bold mt-6 text-sm text-center">
			Upgrade to Grammarly Premium
		</div>
	),
} as const;

function Lower() {
	return (
		<div className="flex flex-col items-center pb-10">
			<p className="font font-bold lower-title">
				Up-Level Your communication
			</p>
			<p className="font text-lg font-medium mt-4">
				Unlock Grammarly Premium’s advanced features and suggestions.
			</p>
			<div className="grid grid-cols-2 w-fit gap-x-14 auto-rows-max mt-10">
				<div className="col-span-1 w-72">
					<BulletPoints {...freeStats} />
				</div>
				<div className="col-span-1 w-72">
					<BulletPoints {...premiumStats} />
				</div>
			</div>
		</div>
	);
}

const BulletPoints = ({
	preface,
	type,
	note,
	points,
	TypeButton,
}: {
	preface: string;
	type: "free" | "premium";
	note: string;
	points: string[];
	TypeButton: () => JSX.Element;
}) => {
	return (
		<div className="flex flex-col">
			<span className="uppercase font preface text-gray-600">
				{preface}
			</span>
			<span className="capitalize font-bold text-3xl ">{type}</span>
			<div className="font-normal h-12">{note}</div>
			<TypeButton />
			<div className="mt-5 flex flex-col gap-3">
				{points.map((point, idx) => {
					return (
						<div
							className="flex items-center gap-1 text-button"
							key={idx}
						>
							<GoCheck />
							<span
								className={` text-black font underline underline-offset-4 text-sm 
                                ${
									type === "premium" && idx === 0
										? "font-bold no-underline"
										: " decoration-dotted"
								}
                            `}
							>
								{point}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Lower;
