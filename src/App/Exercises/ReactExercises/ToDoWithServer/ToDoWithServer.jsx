import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import { CheckIcon } from '../../../Components/Icons/CheckIcon';
import { TrashIcon } from '../../../Components/Icons/TrashIcon';
import { FrameIcon } from '../../../Components/Icons/FrameIcon';
import apiClient from '../../../ApiClients/LocalDevApiClient';
import { AddToDoItem } from './AddToDoItem/index';
import { EmptyToDoList } from './EmptyToDoList/index';
import { EditToDoItem } from './EditToDoItem/index';
import { ToDoList } from './ToDoList/index';

export function ToDoWithServer() {
  const [currentView, setCurrentView] = useState('ToDoList');

  const [editId, setEditId] = useState(-1);

  const handleNewButtonCllick = async () => {
    setCurrentView('AddToDoItem');
  };

  const handleResetButtonClick = async () => {
    setCurrentView('ToDoList');
  };

  const handleAddButtonClick = async () => {
    setCurrentView('ToDoList');
  };

  const handleSaveButtonClick = async () => {
    setCurrentView('ToDoList');
  };

  const handleEditButtonClick = async (id) => {
    setEditId(id);
    setCurrentView('EditToDoItem');
  };

  return (
    <div>
      {currentView == 'ToDoList' && (
        <ToDoList
          onNewButtonClick={handleNewButtonCllick}
          onEditButtonClick={handleEditButtonClick}
        />
      )}
      {currentView == 'AddToDoItem' && (
        <AddToDoItem
          onAddClick={handleAddButtonClick}
          onResetClick={handleResetButtonClick}
        />
      )}
      {currentView == 'EditToDoItem' && (
        <EditToDoItem
          id={editId}
          onSaveClick={handleSaveButtonClick}
          onResetClick={handleResetButtonClick}
        />
      )}
    </div>
  );
}
