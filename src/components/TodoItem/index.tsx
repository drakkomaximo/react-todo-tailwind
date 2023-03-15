import { FC, forwardRef } from "react";
import { TodoItemProps } from "../../interfaces/todo.interface";
import IconCross from "../icons/IconCross";
import IconCheck from "../icons/IconCheck";
import { formatCapitaliceString } from "../../utils/formatCapitaliceString";

const TodoItem: FC<TodoItemProps> = forwardRef<HTMLDivElement, TodoItemProps>(
    ({ todo, removeTodo, updateTodo, todoRef, ...props }) => {
        const { completed, id, title } = todo;
        return (
            <article
                {...props}
                ref={todoRef}
                className="flex gap-4 border-b border-b-gray-400 transition-all duration-1000 dark:bg-gray-800"
            >
                <button
                    className={`h-5 w-5 flex-none rounded-full border-2 ${
                        completed
                            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "inline-block"
                    }`}
                    onClick={() => updateTodo({ id })}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`grow text-gray-600 transition-all duration-1000 dark:text-gray-400 ${
                        completed && "line-through"
                    }`}
                >
                    {formatCapitaliceString(title)}
                </p>
                <button
                    className="flex-none"
                    onClick={() => removeTodo({ id })}
                >
                    <IconCross />
                </button>
            </article>
        );
    }
);

export default TodoItem;
