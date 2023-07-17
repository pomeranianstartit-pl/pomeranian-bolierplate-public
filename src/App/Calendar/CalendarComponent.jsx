import React, { useState } from 'react';

const Calendar1 = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(nextMonth);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const renderCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const calendar = [];

    // Calculate the number of empty cells at the beginning
    let emptyCells = (firstDayOfMonth + 6) % 7;

    // Add empty cells for previous month
    for (let i = 0; i < emptyCells; i++) {
      calendar.push(<div className="calendar-day empty" key={`empty-${i}`} />);
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const isCurrentDay = currentDate.toDateString() === new Date().toDateString();
      const isSelected = selectedDay === i;

      calendar.push(
        <div
          className={`calendar-day ${isCurrentDay ? 'current-day' : ''} ${isSelected ? 'selected' : ''}`}
          key={`day-${i}`}
          onClick={() => handleDayClick(i)}
        >
          <span className="day-number">{i}</span>
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-weekdays">
        {daysOfWeek.map(day => (
          <div className="calendar-weekday" key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar-days">
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar1;


