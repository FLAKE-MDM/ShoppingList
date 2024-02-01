// import React from "react";  старий підхід замість JSX
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const costs = [
    {
      date: [2024, 1, 30],
      title: "Холодильник",
      amount: 999.99,
      id: uuidv4(),
    },
    {
      date: [2023, 11, 1],
      title: "Телевізор",
      amount: 300,
      id: uuidv4(),
    },
    {
      date: [2023, 5, 30],
      title: "Комп'ютер",
      amount: 1200.74,
      id: uuidv4(),
    },
  ];

  const [costsData, setCostsData] = useState(() => {
    let curentCosts = localStorage.getItem("costs");

    if (!curentCosts) {
      return costs;
    } else {
      return JSON.parse(curentCosts);
    }
  });

  const addCostItem = (item) => {
    // const [year, month, day] = val.date.split("-").map(Number);

    // let item = {
    //   date: [year, month, day],
    //   title: val.name,
    //   amount: val.sum,
    // };

    setCostsData((prevCost) => {
      localStorage.setItem("costs", JSON.stringify([item, ...prevCost]));
      return [item, ...prevCost];
    });
  };

  // return React.createElement( старий підхід замість JSX
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "React learn"),
  //   React.createElement(Costs, { costs: costs })
  // );

  return (
    <div>
      <NewCost addCostItem={addCostItem} />
      <Costs costs={costsData} />
    </div>
  );
};

export default App;
