import { Separator } from "@/components/ui/separator";
import Header from "./components/hearder";
import InstallionGuide from "./components/installion-guide";
import WhyIDidThis from "./components/whyIDidThis";
import Title from "./components/title";
import Download from "./components/download";
import Footer from "./components/footer";

export default function Home() {
	return (
		<main className=" h-screen w-full">
			<Header />
			<section className="h-14/15 pl-40 pr-40 w-full overflow-y-auto scroll-smooth">
				<Title />
				<Download />
				<Separator className="my-4 !h-[2px]" />
				<InstallionGuide />
				<Separator className="my-4 !h-[2px]" />
				<WhyIDidThis />
				<Separator className="my-4 !h-[2px]" />
				<Footer />
			</section>
		</main>
	);
}
