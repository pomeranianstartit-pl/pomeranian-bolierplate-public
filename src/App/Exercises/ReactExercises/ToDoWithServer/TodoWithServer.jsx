import './styles.css';
import React from 'react';
import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import { ToDoForm } from './Features/ToDoForm';
import { useEffect, useState } from 'react';

export const TodoWithServer = () => {
  return (
    <div className="todo">
      <MasterHeader value="TODO" />

      <p>Tutaj znajdziesz liste swoich zadań</p>
      <ToDoForm />
    </div>
  );
};
