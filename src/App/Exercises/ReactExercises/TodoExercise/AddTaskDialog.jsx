import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export function AddTaskDialog({ addTaskHandler }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddAndClose = (value) => () => {
    addTaskHandler(value);
    setText('');
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Dodaj zadanie
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dodanie nowego zadania</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Proszę podać nazwę nowego zadania do wykonania
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="Task name"
            type="text"
            fullWidth
            variant="standard"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddAndClose(text)}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
