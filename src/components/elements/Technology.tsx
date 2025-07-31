import d from '../../data/siteData.json';
import { FaExternalLinkAlt } from "react-icons/fa";
import LinkButton from "./LinkButton.tsx";

export default function Technology({name, crispyDivUrl, technologyUrl, description}: {
    name: string,
    crispyDivUrl: string,
    technologyUrl?: string,
    description?: string
}) {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl hover:scale-[1.015] transition-transform duration-300 ease-in-out">
            <div className="bg-zinc-950 dark:bg-zinc-800 text-white p-4 sm:px-6">
                <div className="relative flex items-baseline">
                    <h3 className="text-xl md:text-2xl font-bold mr-2.5">{name}</h3>
                    {technologyUrl &&
                        <a
                            href={technologyUrl}
                            className="group flex items-center cursor-pointer"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <FaExternalLinkAlt className="hover:text-zinc-500 text-zinc-700 transition-colors duration-150 ease-in-out relative bottom-[-1px]"/>
                        </a>
                    }
                </div>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-300 flex-grow-1 text-md px-4 sm:px-6 pt-4 sm:pt-6 pb-2 leading-6.5">
                <p>{description}</p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-300 text-sm px-4 pb-6 sm:pb-8 pt-3 sm:pt-3.5 sm:px-6">
                <LinkButton
                    url={crispyDivUrl}
                    text={`See ${d.siteDetails['title']} use ${name}`}
                    style="dark"
                    target={"_blank"}
                    refer={true}
                />
            </div>
        </div>
    )
}