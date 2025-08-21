import { useState } from 'react';

import ModalWindow from './ModalWindow';
import App from '../App';

function ButtonAddTask({ onClick }) {
  return <button onClick={onClick} className="todo__btn" />;
}

export default ButtonAddTask;
