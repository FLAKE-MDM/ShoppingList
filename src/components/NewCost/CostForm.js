import "./CostForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CostForm = ({ addCostItem, changeVisibleHandler }) => {
  // const [name, setName] = useState("");
  // const [sum, setSum] = useState("");
  // const [date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    date: "",
    title: "",
    amount: "",
  });

  const addCostItemHandler = (e) => {
    e.preventDefault();

    const [year, month, day] = userInput.date.split("-").map(Number);

    let currentUserInput = {
      ...userInput,
      id: uuidv4(),
      date: [year, month, day],
    };

    addCostItem(currentUserInput);
    setUserInput({
      date: "",
      title: "",
      amount: "",
    });
    changeVisibleHandler();
  };

  const changeNameHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const changeSumHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: Number(e.target.value),
      };
    });
  };
  const changeDateHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
  };

  return (
    <form className="new-cost__controls" onSubmit={addCostItemHandler}>
      <div className="new-cost__control">
        <label>Назва</label>
        <input
          onChange={changeNameHandler}
          type="text"
          value={userInput.title}
        />
      </div>
      <div className="new-cost__control">
        <label>Сума</label>
        <input
          onChange={changeSumHandler}
          type="number"
          min="0.01"
          step="0.01"
          value={userInput.amount}
        />
      </div>
      <div className="new-cost__control">
        <label>Дата</label>
        <input
          onChange={changeDateHandler}
          type="date"
          min="2022-01-01"
          value={userInput.date}
        />
      </div>
      <div className="new-cost__actions">
        <button className="btn" type="submit">
          Додати витрату
        </button>
        <button className="btn" onClick={changeVisibleHandler}>
          Відмінити
        </button>
      </div>
    </form>
  );
};

export default CostForm;
