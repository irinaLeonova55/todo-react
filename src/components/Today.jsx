import { useState } from 'react';

function Today() {
  const [currentDate, setCurrentDate] = useState(getDate());
  function getDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return <p className="todo__date">{currentDate}</p>;
}

export default Today;
