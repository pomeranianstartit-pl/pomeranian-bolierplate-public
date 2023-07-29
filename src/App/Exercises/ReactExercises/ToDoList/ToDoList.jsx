import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddTaskDialog from './AddTaskDialog';

const initTasks = ['Task 1', 'Task 3']; //[0, 1, 2, 3, 5, 6].map((val) => `Task ${val + 1}`);

export default function CheckboxList() {
  const [tasks, setTasks] = React.useState(initTasks);
  const [checked, setChecked] = React.useState([]);

  const addTask = (value) => {
    setTasks([...tasks, value]);
  };

  const handleDelete = (value) => () => {
    const currentIndex = tasks.indexOf(value);
    const newTasks = [...tasks];

    if (currentIndex !== -1) {
      newTasks.splice(currentIndex, 1);
    }

    setTasks(newTasks);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <AddTaskDialog addTaskHandler={addTask} />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {tasks.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon color="error" onClick={handleDelete(value)} />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
