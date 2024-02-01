import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs({ costs }) {
  const [year, setYear] = useState("2024");

  const onChangeYear = (year) => {
    setYear(year);
  };

  const filteredCosts = costs.filter((item) => item.date[0] === Number(year));

  return (
    <Card className="costs">
      <CostsFilter year={year} onChangeYear={onChangeYear} />
      <CostsDiagram costs={filteredCosts} />
      <CostList filteredCosts={filteredCosts} />
    </Card>
  );
}

export default Costs;
