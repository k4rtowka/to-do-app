import style from "./Task.module.scss";
import React from "react";
import del from '../../assets/icon-cross.svg';

interface TaskProps {
  removeTask: (task: {id: number, text: string, isComplete: boolean}) => void;
  task: {id: number, text: string, isComplete: boolean};
  completeTask: (task: {id: number, text: string, isComplete: boolean}) => void;
}
const Task = ({task, removeTask, completeTask}:TaskProps) => {

  function check(e:React.MouseEvent){
    e.preventDefault();
    completeTask(task);
  }


  return (
      <div className={style.task}>
        <button className={task.isComplete?style.check:style.button} onClick={(e) => check(e)}>✓</button>
        <span className={[task.isComplete?style.complete:'', style.text].join(' ')}>{task.text}</span>
        <img className={style.img} src={del} alt={'delete'} onClick={() => removeTask(task)}/>
      </div>
  );
};

export default Task;