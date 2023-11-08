
import style from './App.module.scss';
import Input from "./components/input/Input.tsx";
import TaskList from "./components/taskList/TaskList.tsx";
import {useEffect, useState} from "react";
import Filter from "./components/filters/Filter.tsx";
import dark from './assets/icon-moon.svg';
import light from './assets/icon-sun.svg';

function App() {

  const [tasks, setTasks] = useState([
    {id: 3, text: "Task 3", isComplete: false},
    {id: 2, text: "Task 2", isComplete: false},
    {id: 1, text: "Task 1", isComplete: false}
  ]);

  const [filter, setFilter] = useState('All');
  const [sortedTasks, setSortedTasks] = useState([
    {id: 3, text: "Task 3", isComplete: false},
    {id: 2, text: "Task 2", isComplete: false},
    {id: 1, text: "Task 1", isComplete: false}
  ]);
  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    if(filter != 'All'){
      filter === 'Active'?
          setSortedTasks(tasks.filter(t => !t.isComplete))
          :setSortedTasks(tasks.filter(t => t.isComplete));
    }else setSortedTasks(tasks);
    console.log('Sorted: ')
    console.log(sortedTasks);
  }, [tasks, filter]);

  const completedTask = (task: { id: number; text: string; isComplete: boolean}) => {
    const idCompete = tasks.indexOf(task);
    task.isComplete = !task.isComplete;
    tasks.splice(idCompete, 1, task);
    setTasks([...tasks]);
  }

  const addTask = (newTask: { id: number; text: string; isComplete: boolean}) => {
    setTasks([newTask, ...tasks]);
  }

  const removeTask = (task: { id: number; text: string; isComplete: boolean}) => {
    setTasks(tasks.filter(t => t.id !== task.id));
  }

  const changeTheme = () => {
    setTheme(theme===light?dark:light);
  }


  return (
    <>
      <div className={theme===light?[style.App, style.light].join(' '):[style.App, style.dark].join(' ')}>
        <div className={style.content}>
          <div className={style.headers}>
            <h1>TODO</h1>
            <img alt={'theme'} src={theme} onClick={() => changeTheme()}/>
          </div>
            <Input addTask={addTask}/>
            <TaskList tasks={sortedTasks} removeTask={removeTask} completeTask={completedTask}/>
            <Filter
                tasks={tasks}
                setTasks={setTasks}
                setFilter={setFilter}
                filter={filter}
            />
        </div>
      </div>
    </>
  )
}

export default App
