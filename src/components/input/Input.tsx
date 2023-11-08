import style from "./Input.module.scss";
import React, {useState} from "react";

interface InputProps{
  addTask: (task: {id: number, text: string, isComplete: boolean}) => void;
}
const Input = ({addTask}:InputProps) => {
  const [task, setTask] = useState({ id: 0, text: ''});

  function addNewTask(e:React.MouseEvent){
    e.preventDefault();
    const newTask = {
      ...task,
      isComplete: false,
      id: Date.now()
    }
    if(newTask.text.trim() !== '') {
      addTask(newTask);
      setTask({id: 0, text: ''})
    }else setTask({id: 0, text: ''})
  }


  return (
        <form className={style.form}>
          <button onClick={(e) => addNewTask(e)}>✓</button>
          <input type={"text"} placeholder={"Typing todo task..."}
                 onChange={e => setTask({...task, text: e.target.value})}
                 value={task.text}
          />
        </form>
  );
};

export default Input;