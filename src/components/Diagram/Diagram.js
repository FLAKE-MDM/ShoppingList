import "./Diagram.css";
import DiagramBar from "./DiagramBar";

const Diagram = ({ dataSets }) => {
  const dataSetsValues = dataSets.map((item) => item.value);
  const maxMonthCosts = Math.max(...dataSetsValues);

  return (
    <div className="diagram">
      {dataSets.map((item) => (
        <DiagramBar
          key={item.label}
          value={item.value}
          maxValue={maxMonthCosts}
          label={item.label}
        ></DiagramBar>
      ))}
    </div>
  );
};

export default Diagram;
