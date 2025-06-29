const iphoneSteps: string[] = [
	"Go to your Iphones settings.",
	'In the settings, search for "Text Message Forwarding".',
	"If not yet, turn it on.",
];

export type Guide = { header: string; steps: string[] };

export const forwardMessages: Guide = {
	header: "Forward messages from your Iphone",
	steps: iphoneSteps,
};

const microsoftPhone: string[] = [
	"Sign in to microsoft and navigate to your account",
	'Go to "Security info"',
	"Add your phone number as a new sign in method",
	"Change a text message to be the default method sign in method",
];

export const phoneNumberToMicrosoft: Guide = {
	header: "Add your phone number to your microsoft account",
	steps: microsoftPhone,
};

const downloadSteps: string[] = [
	"Click the DOWNLOAD button",
	"open the zip",
	"open then folder and double click on the setup file; this will open all the relevant pages",
];

export const downloadProgram: Guide = {
	header: "Download the program",
	steps: downloadSteps,
};

const diskCoverageSteps: string[] = [
	"Go to the settings window that was just opened",
	"Give Verification full disk access",
	"Why: the program needs acces to your messages in order to extract the microsoft message from there",
];

export const fullDiskAccess: Guide = {
	header: "Give the programm full disk access",
	steps: diskCoverageSteps,
};

const shortCutSteps: string[] = [
	"To run the program with a keyboard combination you need to create a shortcut",
	"Go to the just opened shortcut application",
	"Click the plus sign at the top of the page to create a new shortcut",
	'Search for "open app" and drag it to the main window',
	"Click on the app and search for verification",
	'Click on the "I" at the top right of the page',
	'Click on the "Use as Quick Action" and then add a keyboard shortcut; I use command + shift + K',
	"Now you are done!",
];

export const shortcut: Guide = {
	header: "Create a shortcut",
	steps: shortCutSteps,
};
