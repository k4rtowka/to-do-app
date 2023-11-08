import style from "./Filter.module.scss";

interface tasksProps{
  tasks: { id: number; text: string; isComplete: boolean}[];
  setTasks: void;
  setFilter: void;
  filter: string;
}
const Filter = ({tasks, setTasks, filter, setFilter}:tasksProps) => {
  return (
      <div className={style.footer}>
        <span style={{cursor: "default", color: "hsl(236, 9%, 61%)"}}>{tasks.filter(task => !task.isComplete).length} items left</span>
        <div className={style.filters}>
          <span onClick={() => setFilter('All')} className={filter==='All'?style.active:''}>All</span>
          <span onClick={() => setFilter('Active')} className={filter==='Active'?style.active:''}>Active</span>
          <span onClick={() => setFilter('Completed')} className={filter==='Completed'?style.active:''}>Completed</span>
        </div>
        <span onClick={() => setTasks(tasks.filter(task => !task.isComplete))}>Clear Completed</span>
      </div>
  );
};

export default Filter;