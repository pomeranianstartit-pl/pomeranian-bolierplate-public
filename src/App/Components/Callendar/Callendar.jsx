import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { blockRouterData } from '../../Exercises/HtmlCss/view-router-data';
import './styles.css';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';

export const Callendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Define a function to check if there's an exercise on the selected date
  const hasExerciseOnDate = (date) => {
    const formattedDate = format(date, 'dd-MM-yyyy'); // Format the date to match your exercise date format
    return blockRouterData.some((exercise) => {
      console.log(
        'Exercise:',
        exercise.date,
        exercise.path,
        exercise.linkLabel
      );
      return exercise.date === formattedDate;
    });
  };

  const filteredExercises = blockRouterData.filter((exercise) => {
    const formattedDate = format(selectedDate, 'dd-MM-yyyy');
    console.log('Filtered exercise:', exercise);
    return exercise.date === formattedDate;
  });

  return (
    <div className="calendar-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          value={selectedDate}
          onChange={handleDateChange}
          textField={(params) => <TextField {...params} />}
          shouldDisableDate={(date) => !hasExerciseOnDate(date)}
        />
      </LocalizationProvider>
      <div className="exercise-links">
        <h2>Exercises for {selectedDate ? selectedDate.toDateString() : ''}</h2>
        <ul>
          {filteredExercises.map((exercise) => (
            <li key={exercise.path}>
              <Link to={`../exercises/html-css/${exercise.path}`}>
                {exercise.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
