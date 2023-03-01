import { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";

export function CalendarDatePicker({ name, value, formikChange }) {
  const [date, setDate] = useState(value);
  const handleChangeDate = (e) => {
    setDate(e);
    formikChange(e);
  };

  return (
    <DatePicker
      className="bg-white flex justify-center items-center text-primary rounded-full border-none"
      onChange={handleChangeDate}
      value={date}
      dayPlaceholder="dia"
      monthPlaceholder="mes"
      yearPlaceholder="año"
      name={name}
      id={name}
      calendarIcon={null}
    />
  );
}
