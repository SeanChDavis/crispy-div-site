import d from "../../data/siteData.json";
import LogoMarkDivider from "./LogoMarkDivider.tsx";
import LinkButton from "../elements/LinkButton.tsx";

export default function Header() {
    return (
        <header className="justify-center bg-zinc-950 text-zinc-400">
            <div className="max-w-2xl mx-auto px-4 pt-12 sm:pt-16 md:pt-24 lg:pt-32 mb-10 md:mb-14 text-center">
                <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-2">{d.siteHeader.title}</h1>
                    <p className="text-sm mb-6">
                        {d.siteDetails.author.introText} <a href={d.siteDetails.author.url} className="underline hover:no-underline" target="_blank">{d.siteDetails.author.name}</a>
                    </p>
                    <p className="text-white md:text-lg">{d.siteHeader.subtitle}</p>
                    <p className="text-center">
                        <LinkButton
                            text={d.siteHeader.ctaText}
                            url="#contact"
                            style="light"
                            fill={false}
                            customClasses={"mt-6 md:mt-8 px-6 py-3 text-sm md:text-base"}
                        />
                    </p>
                </div>
            </div>
            <LogoMarkDivider shiftDirection={'up'}/>
        </header>
    )
}