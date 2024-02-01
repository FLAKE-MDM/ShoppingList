import "./CostsFilter.css";

const CostsFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Вибір по року</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
