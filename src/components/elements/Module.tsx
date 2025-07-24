import d from '../../data/siteData.json';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Module({name, crispyDivUrl, technologyUrl, description}: {
    name?: string,
    crispyDivUrl?: string,
    technologyUrl?: string,
    description?: string
}) {
    return (
        <div className="flex flex-col bg-zinc-950 overflow-hidden rounded-xl border-2 border-zinc-950">
            <div className="text-white p-4 sm:px-6">
                {technologyUrl ? (
                    <a
                        href={technologyUrl}
                        className="group flex justify-between items-center cursor-pointer"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <h3 className="text-xl font-bold">{name}</h3>
                        <FaExternalLinkAlt className={"hidden group-hover:inline-block text-zinc-500"} />
                    </a>
                ) : (
                    <h3 className="text-xl font-bold">{name}</h3>
                )}
            </div>
            <div className="bg-white flex-grow-1 text-md px-4 sm:px-6 pt-4 sm:pt-6 pb-2 leading-6.5">
                <p>{description}</p>
            </div>
            <div className="bg-white text-sm px-4 pb-6 sm:pb-8 pt-3 sm:pt-3.5 sm:px-6">
                <a href={crispyDivUrl} className="inline-block bg-zinc-950 border-2 border-zinc-950 text-white text-[13px] font-semibold rounded-full px-4 py-2 hover:bg-white hover:text-zinc-950" target="_blank">See {d.siteDetails['title']} use {name}</a>
            </div>
        </div>
    )
}