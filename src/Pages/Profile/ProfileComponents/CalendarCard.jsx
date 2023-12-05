import { useState } from "react";
import { Calendar } from "react-date-range";

const CalendarCard = () => {
  const [date, setDate] = useState(null);

  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <Calendar onChange={(item) => setDate(item)} date={date} />
    </div>
  );
};

export default CalendarCard;
