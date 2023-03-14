import { ChangeEvent, FC, FormEvent, useState } from "react";
import { TodoCreateProps } from "../../interfaces/todo.interface";

const TodoCreate: FC<TodoCreateProps> = ({ createTodo }) => {
    const [title, setTitle] = useState<string>("");
    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        setTitle(target.value);
    };
    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        }

        createTodo({ title });
        setTitle("");
    };

    return (
        <form
            onSubmit={HandleSubmit}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={handleTitle}
            />
        </form>
    );
};

export default TodoCreate;
