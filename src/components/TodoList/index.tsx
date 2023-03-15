import { FC } from "react";
import { TodoListProps } from "../../interfaces/todo.interface";
import TodoItem from "../TodoItem";

const TodoList: FC<TodoListProps> = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className="mt-8 rounded-t-md overflow-hidden bg-white [&>article]:p-4">
            {
                todos.map((todo)=>(
                    <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
                ))
            }
        </div>
    );
};

export default TodoList;
