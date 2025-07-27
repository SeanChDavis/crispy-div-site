import LogoMark from "../branding/LogoMark.tsx";
import d from "../../data/siteData.json";

export default function Header() {
    return (
        <header className="justify-center bg-zinc-950 text-zinc-400">
            <div className="max-w-xl lg:max-w-4xl mx-auto px-4 pt-12 sm:pt-16 md:pt-24 lg:pt-32 text-center">
                <div className="pt-7 mb-7 md:mb-16">
                    <h1 className="text-2xl md:text-4xl text-white font-bold">{d.siteHeader.title}</h1>
                    <p className="mt-2">{d.siteHeader.subtitle}</p>
                </div>
                <p className="relative text-white inline-block align-bottom">
                    <LogoMark
                        additionalClasses="w-9 h-9 mb-[-14px] relative"
                    />
                </p>
            </div>
        </header>
    )
}