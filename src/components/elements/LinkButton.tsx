export default function LinkButton({text, url, style = "dark", fill = true, customClasses, target = "_self", refer = true}: {
    text: string;
    url: string;
    style?: "dark" | "light";
    fill?: boolean;
    customClasses?: string;
    target?: string;
    refer?: boolean;
}) {
    let baseClasses = "link-button inline-block border-2 text-sm font-semibold rounded-full px-4 py-2 cursor-pointer tracking-wide";
    let combinedClasses = "";

    if (style === "dark") {
        baseClasses += " border-zinc-950 dark:border-white hover:bg-transparent dark:hover:border-white";
        if (fill) {
            combinedClasses += " bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:text-zinc-950 dark:hover:bg-transparent dark:hover:text-white";
        } else {
            combinedClasses += " bg-transparent text-zinc-950 dark:text-white hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950";
        }
    } else if (style === "light") {
        baseClasses += " border-white";
        if (fill) {
            combinedClasses += " bg-white hover:bg-transparent text-zinc-950 hover:text-white";
        } else {
            combinedClasses += " bg-transparent text-white hover:bg-white hover:text-zinc-950";
        }
    }

    return (
        <a
            href={url}
            className={`${baseClasses} ${combinedClasses} ${customClasses}`}
            target={target}
            rel={refer ? "" : "noopener noreferrer"}
        >
            {text}
        </a>
    )
}