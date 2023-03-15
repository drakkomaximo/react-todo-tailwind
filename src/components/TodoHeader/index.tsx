import { FC, useEffect, useState } from "react";
import { handleClickToogleThemeFuncProps } from "../../interfaces/todo.interface";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";
import { initialDarkMode } from "./constants";

const TodoHeader: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(initialDarkMode);

    const toogleTheme = () =>{
        setDarkMode(!darkMode)
    }
    const handleClickRoogleTheme = ({theme}: handleClickToogleThemeFuncProps) => {
        if(theme){
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
        }  
    };

    useEffect(() => {
        handleClickRoogleTheme ({theme: darkMode})
    }, [darkMode])
    

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold uppercase tracking-[0.3rem] text-white">
                    Todo
                </h1>
                <button onClick={toogleTheme}>{darkMode ? <IconSun /> : <IconMoon />}</button>
            </div>
        </header>
    );
};

export default TodoHeader;
