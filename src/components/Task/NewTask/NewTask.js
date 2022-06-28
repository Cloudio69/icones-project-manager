import React from "react";
import { TaskForm } from "../..";

import { v4 as uuid } from "uuid";

const NewTask = (props) => {
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  const saveTaskDataHandler = (newTaskData) => {
    const taskData = {
      ...newTaskData,
      id: small_id,
    };
    props.onAddTask(taskData)
  };

  return (
    <div className="w-full flex justify-center rounded-md bg-slate-100">
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
    </div>
  );
};

export default NewTask;
