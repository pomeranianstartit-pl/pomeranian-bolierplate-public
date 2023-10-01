import React, { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import { blockRouterData as htmlCssRouterData } from '../../Exercises/HtmlCss/view-router-data';
import { blockRouterData as jsRouterData } from '../../Exercises/Js/view-router-data';
import { blockRouterData as reactRouterData } from '../../Exercises/ReactExercises/view-router-data';
import './styles.css';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';

export const Callendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const prefixHtmlCss = '../exercises/html-css/'; //prefixes to uptade paths
  const prefixJs = '../exercises/Js/';
  const prefixReact = '../exercises/React/';
  //updating paths
  const updatedHtmlCssRouterData = htmlCssRouterData.map((exercise) => ({
    ...exercise,
    path: prefixHtmlCss + exercise.path,
  }));

  const updatedJsRouterData = jsRouterData.map((exercise) => ({
    ...exercise,
    path: prefixJs + exercise.path,
  }));

  const updatedReactRouterData = reactRouterData.map((exercise) => ({
    ...exercise,
    path: prefixReact + exercise.path,
  }));
  //merging all arrays to one
  const blockRouterData = [
    ...updatedHtmlCssRouterData,
    ...updatedJsRouterData,
    ...updatedReactRouterData,
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const hasExerciseOnDate = (date) => {
    const formattedDate = format(date, 'dd-MM-yyyy');
    return blockRouterData.some((exercise) => {
      return exercise.date === formattedDate;
    });
  };

  const filteredExercises = blockRouterData.filter((exercise) => {
    const formattedDate = format(selectedDate, 'dd-MM-yyyy');
    return exercise.date === formattedDate;
  });

  return (
    <div className="calendar-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          value={selectedDate}
          onChange={handleDateChange}
          defaultValue={'2023-06-01'}
          slotProps={{
            actionBar: {
              actions: [''],
            },
          }}
          textField={(params) => (
            <TextField {...params} className="custom-date-picker" />
          )}
          shouldDisableDate={(date) => !hasExerciseOnDate(date)}
          okButtonText=""
          cancelButtonText=""
        />
      </LocalizationProvider>
      <div className="exercise-links">
        <h2>Exercises for {selectedDate ? selectedDate.toDateString() : ''}</h2>
        <ul>
          {filteredExercises.map((exercise) => (
            <li key={exercise.path}>
              <Link to={exercise.path}>{exercise.linkLabel}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
