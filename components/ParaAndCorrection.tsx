import React, { useState } from "react";
import CorrectionCard from "./CorrectionCard";
import Correction1 from "./corrections/Correction1";
import Correction2 from "./corrections/Correction2";
import Correction3 from "./corrections/Correction3";
import Correction4 from "./corrections/Correction4";
import ParagraphCard from "./ParagraphCard";
import Para1 from "./paragraphs/Para1";
import Para2 from "./paragraphs/Para2";
import Para3 from "./paragraphs/Para3";
import Para4 from "./paragraphs/Para4";

function ParaAndCorrection({ idx }: { idx: number }) {
	return (
		<>
			<ParagraphCard show={idx === 1}>
				<Para1 />
			</ParagraphCard>
			<ParagraphCard show={idx === 2}>
				<Para2 />
			</ParagraphCard>
			<ParagraphCard show={idx === 3}>
				<Para3 />
			</ParagraphCard>
			<ParagraphCard show={idx === 4}>
				<Para4 />
			</ParagraphCard>
			<CorrectionCard show={idx === 1}>
				<Correction1 />
			</CorrectionCard>
			<CorrectionCard show={idx === 2}>
				<Correction2 />
			</CorrectionCard>
			<CorrectionCard show={idx === 3}>
				<Correction3 />
			</CorrectionCard>
			<CorrectionCard show={idx === 4}>
				<Correction4 />
			</CorrectionCard>
		</>
	);
}

export default ParaAndCorrection;
