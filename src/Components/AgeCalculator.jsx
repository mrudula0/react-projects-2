import React, { useState } from "react";
const AgeCalculator = () => {
  const [age, setAge] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  const handleCheck = () => {
    const date = new Date().toLocaleString();
    setSelectedDate(date);
  };
  return (
    <>
      <h1>calculate age</h1>
      <input type="date" onChange={handleChange} value={age} />
      <button onClick={handleCheck}>check</button>
      <p>{selectedDate}</p>
    </>
  );
};
export default AgeCalculator;
