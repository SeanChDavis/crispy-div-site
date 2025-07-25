export default function LinkButton({text, url, className, target, rel}: {
    text: string;
    url: string;
    className?: string;
    target?: string;
    rel?: string;
}) {
    return (
        <a
            href={url}
            className={`inline-block bg-zinc-950 border-2 border-zinc-950 text-white text-[13px] font-semibold rounded-full px-4 py-2 hover:bg-white hover:text-zinc-950 ${className}`}
            target={target}
            rel={rel}
        >
            {text}
        </a>
    )
}