import Link from "next/link";

export default function Footer() {
	return (
		<footer className="text-xl m-10">
			<Link
				target="_blank"
				href={
					"https://github.com/MrNaakka/Extract-Microsoft-Verification-Code"
				}
			>
				Github
			</Link>
		</footer>
	);
}
