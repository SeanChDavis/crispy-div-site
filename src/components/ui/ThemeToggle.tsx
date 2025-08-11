import {useEffect} from "react";
import {MdBrightnessMedium} from "react-icons/md";

export default function ThemeToggle({classes}: { classes?: string }) {
    // const [theme, setTheme] = useState("system");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark" || stored === "light") {
            // setTheme(stored);
            document.documentElement.classList.toggle("dark", stored === "dark");
        } else {
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", newTheme);
        // setTheme(newTheme);
    };

    // const themeToggleColor =
    //     theme === "dark"
    //         ? "text-stone-600"
    //         : theme === "light"
    //             ? "text-yellow-500"
    //             : prefersDark
    //                 ? "text-stone-600"
    //                 : "text-yellow-500";

    return (
        <button onClick={toggleTheme}>
            <MdBrightnessMedium title={"Toggle Dark Mode"} className={classes}/>
        </button>
    );
}