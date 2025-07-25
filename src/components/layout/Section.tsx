import React from "react";
import SectionHeader from "../elements/SectionHeader.tsx";

export default function Section({
                                        sectionHeaderTitle,
                                        sectionHeaderSubtitle,
                                        sectionStyle,
                                        sectionAnchor,
                                        customClasses,
                                        children
                                    }: {
    sectionHeaderTitle?: string,
    sectionHeaderSubtitle?: string,
    sectionStyle?: "light" | "gray" | "dark",
    sectionAnchor?: string,
    customClasses?: string,
    children: React.ReactNode
}) {
    let sectionClasses = "";

    if (!sectionStyle || sectionStyle === "light") {
        sectionClasses = "bg-white text-zinc-950 dark:bg-zinc-900 dark:text-zinc-300";
    } else if (sectionStyle === "gray") {
        sectionClasses = "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-300";
    } else if (sectionStyle === "dark") {
        sectionClasses = "bg-zinc-950 text-zinc-400";
    }

    return (
        <section
            {...(sectionAnchor ? { id: sectionAnchor } : {})}
            className={`relative ${sectionClasses} ${customClasses}`}
        >
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