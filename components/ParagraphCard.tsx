import React from "react";

function ParagraphCard({
	children,
	show,
}: {
	children: JSX.Element;
	show: boolean;
}) {
	return (
		<div
			className={` rounded-md h-60 w-96 p-10  bg-white/80 absolute top-0 left-0 ${
				show
					? "shadow-lg opacity-100 z-10 translate-y-16"
					: "opacity-0 z-0"
			} transition-all duration-500 `}
		>
			{children}
		</div>
	);
}

export default ParagraphCard;
