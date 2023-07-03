import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400 transition-all duration-700">
            {/* <button className=" inline-block h-5 w-5 flex-none rounded-full border-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500">
            </button> */}

            {/* Centrar con flex box */}
            {/* <button className="flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                <IconCheck />
            </button> */}

            {/* Centrar con grid */}
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "grid  place-items-center   bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>

            <p
                className={`grow text-gray-600 transition-all duration-700 dark:text-gray-400 ${
                    completed && "line-through"
                }`}
            >
                {title}
            </p>

            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
