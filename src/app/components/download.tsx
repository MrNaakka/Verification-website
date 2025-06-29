import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Download() {
	return (
		<section className="flex h-1/2 items-center">
			<div className="w-3/5">
				<Button
					variant={"outline"}
					size={"lg"}
					className="text-7xl h-auto w-auto p-5 border-black border-2"
					asChild
				>
					<Link href="/api" download>
						DOWNLOAD
					</Link>
				</Button>
			</div>
			<div className="w-2/5 text-3xl ">Requires MacOS and an Iphone</div>
		</section>
	);
}
