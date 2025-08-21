function ModalTime({ value, onChange }) {
  return (
    <div className="modal__time">
      <label htmlFor="time-input" className="modal__time__label">
        Time
      </label>
      <input
        id="time-input"
        name="time"
        type="time"
        className="modal__time__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ModalTime;
