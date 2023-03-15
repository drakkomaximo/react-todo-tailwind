export const initialStateTodos = () => {
    const result = localStorage.getItem('todos')
    if(result){
        return JSON.parse(result)
    }else{
        return []
    }
};

