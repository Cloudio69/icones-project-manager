import React from "react";

import { Tooltip } from "@mui/material";

import DragHandleIcon from "@mui/icons-material/DragHandle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Task = (props) => {
  const timeCreated = new Date(props.creation);

  const dayCreated = timeCreated.toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const withPmAm = timeCreated.toLocaleTimeString("en-US", {
    // en-US can be set to 'default' to use user's browser settings
    hour: "2-digit",
    minute: "2-digit",
  });


  return (
    <>
      <div className="ic-task__drag w-full text-slate-400 text-center px-2 bg-slate-200 rounded-b-none rounded-t-md">
        <DragHandleIcon />
      </div>
      <div className="ic-task p-2 shadow rounded-t-none rounded-b-md">
        <div className="ic-task__heading px-2 flex justify-between items-center">
          <div className="ic-task__title text-xl font-bold">{props.title}</div>
          <div className="ic-task__category text-xs">{props.category}</div>
        </div>
        <div className="ic-task__body">
          <div className="break-all overflow-hidden text-sm p-2 py-3">
            {props.description}
          </div>
        </div>
        <div className="ic-task__footer py-2">
          <div className="ic-task__start px-2 flex items-center gap-1 text-slate-400">
            <span className="ic-task__start-icon text-xs">
              <AccessTimeIcon />
            </span>
            <span className="ic-task__start-text">
              <Tooltip title={dayCreated} arrow>
                <span className="ic-task__start-date">{withPmAm}</span>
              </Tooltip>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
