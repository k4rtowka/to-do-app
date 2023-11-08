import style from "../../App.module.scss";
import Task from "../task/Task.tsx";

interface TaskListProps{
  tasks: { id: number; text: string; isComplete: boolean}[];
  removeTask: void;
  completeTask: void;
}

const TaskList = ({tasks, removeTask, completeTask}:TaskListProps) => {

  return (
      <div className={style.list}>

        {
          tasks.length?
          tasks.map(task =>
            <Task task={task} key={task.id} removeTask={removeTask} completeTask={completeTask}/>
        ):
              <span className={style.no__task}>
                No tasks
                <br/>
                Check selected filter
              </span>
        }
      </div>
  );
};

export default TaskList;