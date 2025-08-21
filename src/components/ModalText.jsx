function ModalText({ value, onChange }) {
  return (
    <div className="modal__text">
      <label htmlFor="text-input" className="modal__text__label">
        Title
      </label>
      <input
        id="text-input"
        name="text"
        type="text"
        className="modal__text__input"
        placeholder="Write a task"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default ModalText;
