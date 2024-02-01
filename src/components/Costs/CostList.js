import CostItem from "./CostItem";
import "./CostList.css";

const CostList = ({ filteredCosts }) => {
  if (filteredCosts.length === 0) {
    return <h2 className="cost-list__fallback">В цьому році не було витрат</h2>;
  }

  return (
    <ul className="cost-list">
      <li>
        {filteredCosts.map((item) => (
          <CostItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
          />
        ))}
      </li>
    </ul>
  );
};

export default CostList;
