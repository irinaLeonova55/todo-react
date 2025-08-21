import { useState } from 'react';
import ModalText from './ModalText';
import ModalTime from './ModalTime';
import ModalButton from './ModalButton';

function ModalWindow({
  isOpen,
  closeOnClick,
  onClick,
  addNewTask,
  textValue,
  timeValue,
  textHandleChange,
  timeHandleChange,
}) {
  return (
    <div className={`modal__window ${!isOpen && 'hidden'}`}>
      <button className="modal__close__btn" onClick={() => closeOnClick()}>
        &times;
      </button>
      <form className="modal__form" onClick={onClick} onSubmit={addNewTask}>
        <h2 className="modal__title">Add New Task</h2>
        <ModalText value={textValue} onChange={textHandleChange} />
        <ModalTime value={timeValue} onChange={timeHandleChange} />
        <ModalButton />
      </form>
    </div>
  );
}

export default ModalWindow;
