import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function FormDialog({ addTaskHandler }) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState('');

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
    <div>
      <IconButton onClick={handleClickOpen}>
        <AddCircleIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
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
    </div>
  );
}
