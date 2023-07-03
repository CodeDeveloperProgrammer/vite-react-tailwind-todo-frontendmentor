import IconMoon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold uppercase tracking-widest text-white">
                    todo
                </h1>
                <button>
                    <IconMoon className="fill-purple-700" />
                </button>
            </div>
        </header>
    );
};

export default Header;
