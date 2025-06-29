import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import React from "react";
import { Guide } from "../content/installion-steps";

export default function OneGuide({ guide }: { guide: Guide }) {
	var index = 0;

	return (
		<section className="w-full border-1 border-black rounded p-1">
			<Collapsible>
				<CollapsibleTrigger className="text-left flex justify-between items-center m-2 text-3xl w-full p-1">
					{guide.header}
					<ChevronDown />
				</CollapsibleTrigger>
				<CollapsibleContent className="mt-4">
					<ol className="flex text-2xl flex-col gap-2">
						{guide.steps.map((x) => {
							index += 1;
							return (
								<React.Fragment key={crypto.randomUUID()}>
									<Separator className="!h-[2px]" />
									<li className="ml-2 mr-2">{`${index}. ${x}`}</li>
								</React.Fragment>
							);
						})}
					</ol>
				</CollapsibleContent>
			</Collapsible>
		</section>
	);
}
