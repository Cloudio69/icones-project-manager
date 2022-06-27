import React, { useState } from "react";

import {
  Modal,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "./TaskForm.css";

const TaskForm = (props) => {
  const [activeModal, setActiveModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    title: "",
    priority: 3,
    description: "",
    dateCreation: new Date(),
  });

  const modalHandler = () => {
    setActiveModal((prevState) => !prevState);
  };

  const formHandler = (event) => {
    event.preventDefault();
    
    const taskData = {
      title: formInputs.title,
      priority: formInputs.priority,
      description: formInputs.description,
      dateCreation: new Date()
    };

    props.onSaveTaskData(taskData);

    modalHandler()

    setFormInputs({
      title: "",
      priority: 3,
      description: "",
      dateCreation: new Date(),
    });
  };

  const timeCreated = new Date(formInputs.dateCreation);

  const dayCreated = timeCreated.toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const withPmAm = timeCreated.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Button className="w-full" startIcon={<AddIcon />} onClick={modalHandler}>
        AGGIUNGI TASK
      </Button>

      <Modal open={activeModal} onClose={modalHandler}>
        <div className="ic-task__form bg-slate-100 p-2 rounded-lg">
          <div className="ic-task__form-head flex justify-between items-center px-2">
            <span className="ic-task__form-title text-2xl font-bold">
              Aggiungi Task
            </span>
            <span className="ic-task__form-close">
              <IconButton onClick={modalHandler}>
                <CloseIcon />
              </IconButton>
            </span>
          </div>
          <div className="ic-task__form-body p-4">
            <form
              className="ic-task__form-manage flex flex-col gap-4"
              onSubmit={formHandler}
            >
              <TextField
                name="txtTitle"
                label="Titolo"
                required
                value={formInputs.title}
                maxLength={40}
                placeholder="Es: Completare lavoro.."
                onChange={(event) => {
                  setFormInputs({ ...formInputs, title: event.target.value });
                }}
                variant="outlined"
              />
              <TextField
                id="slPriority"
                value={formInputs.priority}
                onChange={(event) => {
                  setFormInputs({
                    ...formInputs,
                    priority: event.target.value,
                  });
                }}
                className="bg-slate-50"
                label="Priorità"
                select
                variant="outlined"
              >
                <MenuItem value={1}>Alta</MenuItem>
                <MenuItem value={2}>Bassa</MenuItem>
                <MenuItem value={3}>Nessuna</MenuItem>
              </TextField>
              <TextField
                label="Descrizione"
                multiline
                value={formInputs.description}
                rows={4}
                variant="outlined"
                placeholder="Es: Per iniziare dobbiamo completare.."
                onChange={(event) => {
                  setFormInputs({
                    ...formInputs,
                    description: event.target.value,
                  });
                }}
              />
              <div className="ic-task__form-footer absolute bottom-0 left-0 py-4 w-full flex justify-between">
                <div className="ic-task__start px-4 flex items-center gap-1 text-slate-400">
                <span className="text-xs">Data creazione: </span>
                  <span className="ic-task__start-icon text-xs">
                    <AccessTimeIcon />
                  </span>
                  <span className="ic-task__start-text">
                    <Tooltip title={dayCreated} arrow>
                      <span className="ic-task__start-date">{withPmAm}</span>
                    </Tooltip>
                  </span>
                </div>
                <div className="ic-task__form-submit px-4">
                  <Button
                    type="submit"
                    startIcon={<AddIcon />}
                    variant="contained"
                  >
                    {" "}
                    Aggiungi
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TaskForm;
