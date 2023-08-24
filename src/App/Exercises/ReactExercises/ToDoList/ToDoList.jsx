import * as React from 'react';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/AddBoxRounded';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';

const initList = localStorage.getItem('todo-list')
  ? JSON.parse(localStorage.getItem('todo-list'))
  : [];

export default function CheckboxList() {
  const [input, setInput] = React.useState('');
  const [list, setList] = React.useState(initList);
  const [errorMessage, setErrorMessage] = React.useState('');

  const updateList = (updatedList) => {
    localStorage.setItem('todo-list', JSON.stringify(updatedList));
    setList(updatedList);
  };

  const handleChange = (id) => {
    const updatedList = list.map((item) =>
      item.id === id
        ? { name: item.name, id: item.id, checked: !item.checked }
        : item
    );
    updateList(updatedList);
  };

  // => id = 3
  // {id: 1} 1 !== 3 => true zostaw na liście
  // {id: 2} 2 !== 3 => true
  // {id: 3} 3 !== 3 => false -> usuń z listy
  // {id: 4} 4 !== 3 => true
  // {id: 5} 5 !== 3 => true
  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    updateList(updatedList);
  };

  const handleAdd = () => {
    if (input) {
      const id = Math.random() * 10;
      const updatedList = [...list, { name: input, id, checked: false }];
      updateList(updatedList);
      setInput('');
    } else {
      setErrorMessage('Incorrect entry');
    }
  };

  return (
    <Box p="2rem" border="1px solid lightblue" borderRadius="1rem">
      <Box display="flex" alignItems="center" gap="1rem">
        <TextField
          fullWidth
          label="Name of the task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setErrorMessage('');
          }}
          helperText={errorMessage}
          error={!!errorMessage}
        />
        <IconButton onClick={handleAdd}>
          <AddIcon fontSize="large" color="success" />
        </IconButton>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {list.map(({ name, id, checked }) => (
          <ListItem
            key={id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(id)}
              >
                <DeleteIcon color="error" />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => handleChange(id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked}
                  tabIndex={-1}
                  color="success"
                  disableRipple
                  inputProps={{ 'aria-labelledby': id }}
                />
              </ListItemIcon>
              <ListItemText id={id} primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
