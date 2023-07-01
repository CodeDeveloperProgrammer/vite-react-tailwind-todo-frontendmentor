import MoonIcon from "./components/MoonIcon";
import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold uppercase tracking-widest text-white">
                        todo
                    </h1>
                    <button>
                    <MoonIcon className="fill-purple-700" />
                    </button>
                </div>

                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-3">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        className="w-full text-gray-500 outline-none"
                        placeholder="Create a new todo..."
                    />
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white [&>article]:px-4">
                    <article className="flex gap-4 border-b border-b-gray-400 py-4">
                        <button className=" inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online JavaScript curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400 py-4">
                        <button className=" inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online JavaScript curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400 py-4">
                        <button className=" inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online JavaScript curse
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className="px-4 py-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">Clear Completed</button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4 mt-8">
                <div className=" bg-white rounded-md p-4 flex justify-center gap-4">
                <button className="text-blue-600">All</button>
                <button className="hover:text-blue-600">Active</button>
                <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md flex justify-center gap-4 p-4">
                <h2>POR HACER</h2>
                Drag and drop to reorder list
                </div>
            </section>
        </div>
    );
};

export default App;
