import ThemeToggle from "./ThemeToggle.jsx";
import TextSizeToggle from "./TextSizeToggle.jsx";

export default function SettingsPanel() {

    const classes = "text-sm md:text-lg text-zinc-500 hover:text-zinc-600 cursor-pointer transition-colors duration-300 ease-in-out";

    return (
        <div className={"inline-block absolute right-6 top-4 mb-0"}>
            <div className={"flex gap-x-2 items-center justify-center"}>
                <ThemeToggle classes={classes} /><TextSizeToggle classes={classes} />
            </div>
        </div>
    );
}