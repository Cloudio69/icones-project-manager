import React, { useState } from "react";

// Style
import "./Card.css";

// Dummy Data
import { cardData } from "../../data/dummyData";
import { NewTask, Task } from "../../components";

const Card = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  };

  return (
    <div className="ic-card shadow-md rounded-xl bg-slate-50">
      <div className="flex p-2 h-full flex-col">
        {cardData.map((items, index) => (
          <>
            <div
              key={index}
              className="ic-card__title flex flex-grow items-center justify-between py-2"
            >
              <div className="text-lg font-bold px-2">{items.title}</div>
              <div
                className="ic-card__category text-sm  uppercase text-slate-800 drop-shadow px-2 rounded-md font-bold"
                style={{ backgroundColor: items.categoryColor }}
              >
                {items.category}
              </div>
            </div>
            <hr />
            <div className="ic-card__tasks">
              <div className="p-2">
                <NewTask onAddTask={addTaskHandler} />
              </div>
              <div className="p-2 flex flex-col gap-2">
                {tasks.length > 0 ? tasks.map((task, indexTasks) => (
                  <Task
                    key={indexTasks}
                    title={task.title}
                    priority={task.priority}
                    description={task.description}
                    creation={task.dateCreation}
                  />
                )) : <p className="text-xl font-bold text-center"> Nessuna task </p>}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Card;
