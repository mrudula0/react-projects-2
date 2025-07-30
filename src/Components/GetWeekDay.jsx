import React, { useState } from "react";

const GetWeekDay = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [m, setM] = useState("");
  const handleChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    if (!newDate) return;
    const date = new Date(newDate);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[date.getUTCDay()];
    setWeekDay(day);

    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const month = months[date.getMonth()];
    setM(month);
  };
  const handleFindDay = () => {
    if (!selectedDate) return;
    const date = new Date(selectedDate);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wedenesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[date.getUTCDay()];
    setWeekDay(day);
    console.log(day, "8888");
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUNE",
      "JULY",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const month = months[date.getMonth()];
    setM(month);
  };
  return (
    <div className="container">
      <h1>Get Weeek Day</h1>
      <input type="date" onChange={handleChange} value={selectedDate} />
      <button onClick={handleFindDay}>Find Day</button>
      {weekDay && (
        <p>
          that date falls on {weekDay} and month is {m}
        </p>
      )}
    </div>
  );
};

export default GetWeekDay;
