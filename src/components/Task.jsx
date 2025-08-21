import trashIcon from '../assets/images/trash.svg';

function Task({ task, deleteTask, toggleCompleted, isActive }) {
  return (
    <li>
      <div
        className={`task__text ${task.completed ? 'task__completed' : ''}`}
        onClick={() => toggleCompleted(task.id)}
      >
        <p className="task__title">{task.text}</p>
        <p className="task__time">{task.time}</p>
      </div>
      <img
        className="task__trash"
        src={trashIcon}
        onClick={() => deleteTask(task.id)}
      />
    </li>
  );
}
export default Task;
