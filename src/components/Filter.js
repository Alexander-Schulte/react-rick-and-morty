import "../Filter.css";
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
      <form className="Form" onSubmit={handleOnName}>
        <div className="DivName">
          <label className="LabelName">Name</label>
          <input
            className="SearchCharacter"
            name="charactername"
            id="charactername"
            type="text"
            placeholder="search by charactername..."
          />
        </div>
        <div className="DivStatus">
          <label className="LabelStatus">Status</label>
          <select onClick={handleOnStatus} name="status" id="status">
            <option value="all">All</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <button type="submit" className="SubmitButton">
          Load
        </button>
      </form>
    </div>
  );
}
