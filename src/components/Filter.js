export default function Filter({ onFilterName, onFilterStatus }) {
  function handleOnStatus(event) {
    event.preventDefault();
    const FilterStatusInputValue = event.target.value;
    onFilterStatus(FilterStatusInputValue);
  }

  function handleOnName(event) {
    event.preventDefault();
    const FilterNameInputValue = event.target.charactername.value;
    onFilterName(FilterNameInputValue);
  }

  return (
    <div className="Filter">
      <form onSubmit={handleOnName}>
        <label className="LabelName">Name</label>
        <input
          name="charactername"
          id="charactername"
          type="text"
          placeholder="search by charactername..."
        />
        <button type="submit" className="SubmitButton">
          Load Characters!
        </button>
        <label className="LabelStatus">Status</label>
        <select onClick={handleOnStatus} name="status" id="status">
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </form>
    </div>
  );
}
