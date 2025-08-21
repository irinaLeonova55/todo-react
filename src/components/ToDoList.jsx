import Task from './Task';

function TodoList({ tasks, deleteTask, toggleCompleted, isActive }) {
  //сортировка задач
  let newTasks = [];
  if (isActive === 'toDo') {
    newTasks = tasks.filter((task) => !task.completed);
  } else if (isActive === 'complete') {
    newTasks = tasks.filter((task) => task.completed);
  } else {
    newTasks = [...tasks];
  }

  return (
    <ul className="todo__list">
      {newTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

export default TodoList;
