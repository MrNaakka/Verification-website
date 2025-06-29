import OneGuide from "./oneGuide";
import {
	forwardMessages,
	downloadProgram,
	fullDiskAccess,
	phoneNumberToMicrosoft,
	shortcut,
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
			<OneGuide guide={fullDiskAccess} />
			<OneGuide guide={shortcut} />

			<p>And if you ever get stuck; ask chat-gpt...</p>
		</section>
	);
}
