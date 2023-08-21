import './styles.css';
import { useEffect, useState } from 'react';
import { ListView } from './ListView/ListView';
import { AddTaskView } from './AddTaskView/AddTaskView';

export const ToDoWithServer = () => {
  return (
    <div>
      <h1>TO DO</h1>

      <ListView />
      <AddTaskView />
    </div>
  );
};
