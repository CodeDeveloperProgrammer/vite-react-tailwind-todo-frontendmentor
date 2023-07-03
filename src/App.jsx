import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

/* const initialStateTodos = [
    { id: 1, title: "Go to the way", completed: true },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Learn Vite", completed: false },
    { id: 4, title: "Go to the gym", completed: true },
    { id: 5, title: "Learn Tailwindcss", completed: false },
]; */
const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    /*     const filteredTodos = todos.filter((todo) => {
        if (filter === "all") {
            return true;
        } else if (filter === "active") {
            return !todo.completed;
        } else if (filter === "completed") {
            return todo.completed;
        }
    }); */

    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        /* vite-react-tailwindcss */
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-700 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />

            <main className="md:max-w-xl container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    /* todos={todos} Ahora ya le paso los todos filtrados según el estado del filter */
                    todos={filteredTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />

                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />

                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="md:max-w-xl container mx-auto mt-8 px-4 dark:text-gray-400">
                <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-700 dark:bg-gray-800">
                    <h2>POR HACER</h2>
                    Drag and drop to reorder list
                </div>
            </footer>
        </div>
    );
};

export default App;
