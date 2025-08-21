function FilterButton({ className, name, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`${className} ${isActive ? 'checked' : ''}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default FilterButton;
