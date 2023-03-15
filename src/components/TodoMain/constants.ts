import { sortedTodosFuncProps } from "../../interfaces/todo.interface";

export const initialStateTodos = () => {
    const result = localStorage.getItem('todos')
    if(result){
        return JSON.parse(result)
    }else{
        return []
    }
};

export const sortedTodos = ({list, startIndex, endIndex}: sortedTodosFuncProps) =>{
    const newTodos = [...list];
    const [itemSorted] = newTodos.splice(startIndex, 1);
    newTodos.splice(endIndex, 0, itemSorted);
    return newTodos;
}