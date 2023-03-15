import { FC } from "react";
import { TodoComputedProps } from "../../interfaces/todo.interface";

const TodoComputed: FC<TodoComputedProps> = ({
    computedItemsLeft,
    clearCompleted,
    filterOption
}) => {

    if(filterOption !== 'all') return null

    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4 dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
