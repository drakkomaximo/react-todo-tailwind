import { Droppable, Draggable } from "@hello-pangea/dnd";
import { FC } from "react";
import { TodoListProps } from "../../interfaces/todo.interface";
import TodoItem from "../TodoItem";

const TodoList: FC<TodoListProps> = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                    className="mt-8 overflow-hidden rounded-t-md bg-white [&>article]:p-4"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            index={index}
                            key={todo.id}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvided) => (
                                <TodoItem
                                    todo={todo}
                                    updateTodo={updateTodo}
                                    removeTodo={removeTodo}
                                    todoRef={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
