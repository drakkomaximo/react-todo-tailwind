import { FC } from "react";
import { TodoFilterProps } from "../../interfaces/todo.interface";

const TodoFilter: FC<TodoFilterProps> = ({ changeFilter, filterOption }) => {
    return (
        <section className="container mx-auto mt-8 px-4">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                <button
                    className={
                        filterOption === "all"
                            ? "text-blue-600"
                            : "text-gray-400 hover:text-blue-600"
                    }
                    onClick={() => changeFilter({ filter: "all" })}
                >
                    All
                </button>
                <button
                    className={
                        filterOption === "active"
                            ? "text-blue-600"
                            : "text-gray-400 hover:text-blue-600"
                    }
                    onClick={() => changeFilter({ filter: "active" })}
                >
                    Active
                </button>
                <button
                    className={
                        filterOption === "complete"
                            ? "text-blue-600"
                            : "text-gray-400 hover:text-blue-600"
                    }
                    onClick={() => changeFilter({ filter: "complete" })}
                >
                    Complete
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
