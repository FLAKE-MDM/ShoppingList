import "./NewCost.css";
import CostForm from "./CostForm";
import { useState } from "react";

const NewCost = ({ addCostItem }) => {
  const [visibleForm, setVisibleForm] = useState(false);

  function changeVisibleHandler() {
    setVisibleForm((prev) => {
      return !prev;
    });
  }

  if (visibleForm) {
    return (
      <div className="new-cost">
        <CostForm
          addCostItem={addCostItem}
          changeVisibleHandler={changeVisibleHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-cost">
      <button className="btn" onClick={changeVisibleHandler}>
        Додати нову витрату
      </button>
    </div>
  );
};

export default NewCost;
