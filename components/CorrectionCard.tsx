import React from "react";

function CorrectionCard({
	children,
	show,
}: {
	children: JSX.Element;
	show: boolean;
}) {
	return (
		<div
			className={` absolute bg-white rounded-md top-52 left-14 ${
				show
					? "shadow-lg opacity-100 z-20 translate-y-16"
					: "opacity-0 z-0 "
			} anime duration-500  delay-1000`}
		>
			{children}
		</div>
	);
}

export default CorrectionCard;
