import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {
  const diagramDataSets = [
    { label: "Січ", value: 0 },
    { label: "Лют", value: 0 },
    { label: "Бер", value: 0 },
    { label: "Кві", value: 0 },
    { label: "Тра", value: 0 },
    { label: "Чер", value: 0 },
    { label: "Лип", value: 0 },
    { label: "Сер", value: 0 },
    { label: "Вер", value: 0 },
    { label: "Жов", value: 0 },
    { label: "Лис", value: 0 },
    { label: "Гру", value: 0 },
  ];

  for (const cost of props.costs) {
    const costMonth = cost.date[1] - 1;
    diagramDataSets[costMonth].value += cost.amount;
  }

  return <Diagram dataSets={diagramDataSets} />;
};

export default CostsDiagram;
