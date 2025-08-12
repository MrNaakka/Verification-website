import OneGuide from "./oneGuide";
import {
	forwardMessages,
	downloadProgram,
	fullDiskAccess,
	phoneNumberToMicrosoft,
	firstRunOpen,
	addToLoginItems,
	verifyRunning,
} from "../content/installion-steps";

export default function InstallionGuide() {
	return (
		<section
			id="installion-guide"
			className="flex flex-col w-3/5 gap-4 mb-8 mt-15"
		>
			<h2 className="text-7xl mb-10">How to set it up!</h2>
			<OneGuide guide={forwardMessages} />
			<OneGuide guide={phoneNumberToMicrosoft} />
			<OneGuide guide={downloadProgram} />
			<OneGuide guide={firstRunOpen} />
			<OneGuide guide={fullDiskAccess} />
			<OneGuide guide={addToLoginItems} />
			<OneGuide guide={verifyRunning} />

			<p>And if you ever get stuck; ask chat-gpt...</p>
		</section>
	);
}
