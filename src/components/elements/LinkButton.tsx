export default function LinkButton({text, url, style, customClasses, target, rel}: {
    text: string;
    url: string;
    style?: "fill" | "outline";
    customClasses?: string;
    target?: string;
    rel?: string;
}) {
    const buttonClasses = "inline-block border-2 border-zinc-950 text-sm font-semibold rounded-full px-4 py-2 cursor-pointer";
    let styleClasses = "";

    if (!style || style === "fill") {
        styleClasses = "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-transparent hover:text-zinc-950 dark:hover:bg-zinc-200";
    } else if (style === "outline") {
        styleClasses = "bg-transparent text-zinc-950 dark:text-zinc-300 hover:bg-zinc-950 hover:text-white dark:hover:text-zinc-300";
    }

    return (
        <a
            href={url}
            className={`${buttonClasses} ${styleClasses} ${customClasses}`}
            target={target}
            rel={rel}
        >
            {text}
        </a>
    )
}