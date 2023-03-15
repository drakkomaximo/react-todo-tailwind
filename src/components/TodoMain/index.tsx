import { FC, useEffect, useState } from "react";
import TodoHeader from "../TodoHeader";
import TodoComputed from "../TodoComputed";
import TodoCreate from "../TodoCreate";
import TodoFilter from "../TodoFilter";
import TodoFooter from "../TodoFooter";
import TodoList from "../TodoList";
import {
    createTodoFuncProps,
    updateTodoFuncProps,
    Todo,
    deleteTodoFuncProps,
    FilterOptions,
    changeFilterFuncProps,
} from "../../interfaces/todo.interface";
import { initialStateTodos } from "./constants";

const TodoMain: FC = () => {
    const [todos, setTodos] = useState<Todo[]>(initialStateTodos());
    const [filter, setFilter] = useState<FilterOptions>("all");

    const createTodo = ({ title }: createTodoFuncProps) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = ({ id }: updateTodoFuncProps) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = ({ id }: deleteTodoFuncProps) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const changeFilter = ({ filter }: changeFilterFuncProps) => {
        setFilter(filter);
    };

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "complete":
                return todos.filter((todo) => todo.completed);

            default:
                return todos;
        }
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <TodoHeader />
            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <TodoComputed
                    filterOption={filter}
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filterOption={filter} />
            </main>

            <TodoFooter />
        </div>
    );
};

export default TodoMain;
