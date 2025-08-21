import { useState, useEffect } from 'react';

import Today from './components/Today';
import ButtonAddTask from './components/ButtonAddTask';
import FilterButtons from './components/FilterButtons';
import TodoList from './components/ToDoList';
import ModalWindow from './components/ModalWindow';

import './styles/App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false); //модальное окно
  const [textValue, setTextValue] = useState(''); //инпут текст
  const [timeValue, setTimeValue] = useState(''); //инпут время
  const [tasks, setTasks] = useState([]); //список задач
  const [isActive, setIsActive] = useState('all'); //сортировка задач

  //вызов данных из хранилища
  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  //Открытие модального окна
  function openOnClick() {
    setIsOpen(true);
  }

  //Закрытие модального окна
  function closeOnClick() {
    setIsOpen(false);
  }

  //Поле ввода текста в модальном окне
  function textHandleChange(event) {
    setTextValue(event.target.value);
  }

  //Поле ввода времени в модальном окне
  function timeHandleChange(event) {
    setTimeValue(event.target.value);
  }

  //Добавление задачи
  function addNewTask(event) {
    event.preventDefault();
    setIsActive('all');
    const newText = textValue;
    const newTime = timeValue;
    //обработка ошибки
    if (textValue === '') {
      alert('Write a text');
    } else {
      //Формируем задачу
      const newTask = {
        id: Date.now(),
        text: newText,
        time: newTime,
        completed: false,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));

      //Обнуление значение инпутов
      setTextValue('');
      setTimeValue('');

      //Закрытие модального окна
      closeOnClick();
    }
  }

  //Удаление задачи
  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  //Вычеркивание задачи
  function toggleCompleted(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  }

  //изменение состояния сортировки
  function getAll() {
    setIsActive('all');
  }

  function getToDo() {
    setIsActive('toDo');
  }

  function getComplete() {
    setIsActive('complete');
  }

  return (
    <div
      className={`body ${isOpen ? 'modal__open' : undefined}`}
      onClick={isOpen ? closeOnClick : undefined}
    >
      <div className="App">
        <h1>Today's To-Do List</h1>
        <Today />
        <ButtonAddTask onClick={() => openOnClick()} />
        <FilterButtons
          isActive={isActive}
          getAll={getAll}
          getToDo={getToDo}
          getComplete={getComplete}
        />

        <TodoList
          isActive={isActive}
          tasks={tasks}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      </div>
      <ModalWindow
        isOpen={isOpen}
        closeOnClick={closeOnClick}
        onClick={(event) => event.stopPropagation()}
        textValue={textValue}
        timeValue={timeValue}
        addNewTask={addNewTask}
        textHandleChange={textHandleChange}
        timeHandleChange={timeHandleChange}
      />
      <p className="author">Designed and developed by Irina Leonova</p>
    </div>
  );
}

export default App;
