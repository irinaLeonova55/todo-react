function ModalText({ value, onChange }) {
  return (
    <div className="modal__text">
      <label htmlFor="text-input" className="modal__text__label">
        Title
      </label>
      <input
        id="text-input"
        name="taskInputUnique"
        type="text"
        className="modal__text__input"
        placeholder="Write a task"
        autoComplete="new-password"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default ModalText;
