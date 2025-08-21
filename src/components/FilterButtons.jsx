import { useState } from 'react';

import FilterButton from './FilterButton';

function FilterButtons({
  isActive,

  getAll,
  getToDo,
  getComplete,
}) {
  return (
    <div className="todo__choose__tasks">
      <FilterButton
        name="All"
        className={`todo__btn__done__tasks ${
          isActive === 'all' ? 'checked' : ''
        }`}
        onClick={() => getAll()}
      />
      <FilterButton
        name="To - Do"
        className={`todo__btn__done__tasks ${
          isActive === 'toDo' ? 'checked' : ''
        }`}
        onClick={() => getToDo()}
      />
      <FilterButton
        name="Completed"
        className={`todo__btn__completed__tasks ${
          isActive === 'complete' ? 'checked' : ''
        }`}
        onClick={() => getComplete()}
      />
    </div>
  );
}

export default FilterButtons;
