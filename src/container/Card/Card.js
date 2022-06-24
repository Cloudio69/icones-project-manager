import React from "react";

// Style
import "./Card.css";

// Dummy Data
import { cardData } from "../../data/dummyData";
import { NewTask, Task } from "../../components";

const Card = () => {
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
                <NewTask />
              </div>

              <div className="p-2">
                {
                    items.tasks.map((task, index) => (
                        <Task 
                        key={index} 
                        title={task.taskTitle}
                        category={task.taskPriority}
                        description={task.taskDescription}
                        creation={task.taskCreation}
                        ending={task.taskEnding}
                        />
                    ))
                }
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Card;
