import React from "react";
import SectionHeader from "./SectionHeader.tsx";

export default function Section({
                                        title,
                                        subtitle,
                                        anchor,
                                        theme,
                                        headingAlignment,
                                        customClasses,
                                        children
                                    }: {
    title?: string,
    subtitle?: string,
    anchor?: string,
    theme?: "light" | "gray" | "dark",
    headingAlignment?: "left" | "center" | "right",
    customClasses?: string,
    children: React.ReactNode
}) {
    let sectionClasses = "";

    if (!theme || theme === "light") {
        sectionClasses = "bg-white text-zinc-950 dark:bg-zinc-900 dark:text-zinc-300";
    } else if (theme === "gray") {
        sectionClasses = "bg-zinc-100 text-zinc-950 dark:bg-zinc-800 dark:text-zinc-300";
    } else if (theme === "dark") {
        sectionClasses = "bg-zinc-950 text-zinc-400";
    }

    return (
        <section
            {...(anchor ? { id: anchor } : {})}
            className={`relative ${sectionClasses} ${customClasses}`}
        >
            <div className="max-w-xl lg:max-w-5xl mx-auto px-4 py-12 md:py-24 lg:py-28">
                <SectionHeader
                    title={title}
                    subtitle={subtitle}
                    theme={theme}
                    align={headingAlignment}
                />
                {children}
            </div>
        </section>
    );
}