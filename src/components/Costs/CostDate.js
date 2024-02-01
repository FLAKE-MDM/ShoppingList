import "./CostDate.css";

function CostDate({ date }) {
  const currentDate = new Date(date);
  const month = currentDate.toLocaleString("uk-UK", { month: "long" });
  const day = currentDate.toLocaleString("uk-UK", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{currentDate.getFullYear()}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}

export default CostDate;
