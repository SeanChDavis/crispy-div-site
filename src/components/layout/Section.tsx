import React from "react";
import SectionHeader from "../elements/SectionHeader.tsx";

export default function Section({
                                        sectionHeaderTitle,
                                        sectionHeaderSubtitle,
                                        sectionStyle,
                                        customClasses,
                                        children
                                    }: {
    sectionHeaderTitle?: string,
    sectionHeaderSubtitle?: string,
    sectionStyle?: "light" | "gray" | "dark",
    customClasses?: string,
    children: React.ReactNode
}) {
    let sectionClasses = "";

    if (!sectionStyle || sectionStyle === "light") {
        sectionClasses = "bg-white text-zinc-950";
    } else if (sectionStyle === "gray") {
        sectionClasses = "bg-zinc-100 text-zinc-950";
    } else if (sectionStyle === "dark") {
        sectionClasses = "bg-zinc-950 text-zinc-400";
    }

    return (
        <section className={`${sectionClasses} ${customClasses}`}>
            <div className="max-w-xl lg:max-w-5xl mx-auto px-4 py-12 md:py-24">
                <SectionHeader
                    title={sectionHeaderTitle}
                    subtitle={sectionHeaderSubtitle}
                    sectionStyle={sectionStyle}
                />
                {children}
            </div>
        </section>
    );
}