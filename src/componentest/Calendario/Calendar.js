import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
    console.log(date)
  };

  return (
    <div>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      {date.toString()}
    </div>
  );
};

render(<ReactCalendar />, document.querySelector("#root"));

