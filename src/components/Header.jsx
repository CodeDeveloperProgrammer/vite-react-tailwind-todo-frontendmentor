import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 transition-all duration-700">
            <div className="flex justify-between transition-all duration-700">
                <h1 className="transition-all duration-700 text-3xl font-semibold uppercase tracking-widest text-white">
                    todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
